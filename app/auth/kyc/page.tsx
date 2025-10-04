"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function KycPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [modelsReady, setModelsReady] = useState(false);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [working, setWorking] = useState(false);
  const r = useRouter();

  useEffect(() => {
    (async () => {
      // Load face-api from CDN and models
      if (!(window as any).faceapi) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/face-api.js@0.22.2/dist/face-api.min.js";
        script.async = true;
        script.onload = loadModels;
        document.body.appendChild(script);
      } else {
        loadModels();
      }
    })();

    async function loadModels() {
      const faceapi = (window as any).faceapi;
      const MODELS = "https://cdn.jsdelivr.net/gh/vladmandic/face-api/model/"; // public pretrained models
      await faceapi.nets.ssdMobilenetv1.loadFromUri(MODELS);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODELS);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODELS);
      setModelsReady(true);
      // ask camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e) {
        alert("Camera access denied. Please allow camera.");
      }
    }
  }, []);

  async function onVerify() {
    if (!modelsReady) return alert("Models not ready yet");
    if (!idFile) return alert("Please upload your ID photo first");

    setWorking(true);
    const faceapi = (window as any).faceapi;

    // 1) Extract descriptor from ID image
    const idImg = await fileToImage(idFile);
    const idDetection = await faceapi.detectSingleFace(idImg).withFaceLandmarks().withFaceDescriptor();
    if (!idDetection) {
      setWorking(false);
      return alert("No face detected on your ID photo. Please upload a clearer image.");
    }
    const idDescriptor = idDetection.descriptor; // Float32Array(128)

    // 2) Capture frames from live video and compute average descriptor
    const frames = 8;
    const descs: number[][] = [];
    for (let i = 0; i < frames; i++) {
      await new Promise((res) => setTimeout(res, 200)); // small delay between frames
      if (!videoRef.current) continue;
      const vf = await faceapi
        .detectSingleFace(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptor();
      if (vf?.descriptor) {
        descs.push(Array.from(vf.descriptor));
      }
    }
    if (descs.length < 3) {
      setWorking(false);
      return alert("We couldn't detect your face enough times. Please ensure your face is centered and well-lit.");
    }
    const avg = averageDescriptor(descs);

    // 3) Compare (cosine distance). Lower is better.
    const distance = cosineDistance(Array.from(idDescriptor), avg);

    // 4) Send to server for final validation (and to set session KYC=verified if below threshold)
    const res = await fetch("/api/kyc/verify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ distance }),
    });
    setWorking(false);
    if (res.ok) {
      const data = await res.json();
      if (data.ok && data.verified) {
        alert("Identity verified ✅");
        r.push("/auth/status");
      } else {
        alert("Verification failed. Please try again or use a clearer image/lighting.");
      }
    } else {
      alert("Server error. Try again.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold">Identity Verification</h1>
      <p className="text-gray-200">
        Upload your ID photo (passport or national ID) and record a short selfie video.
        Keep your face centered and slowly turn your head left and right.
      </p>

      <div className="space-y-3">
        <label className="block">
          <span className="block mb-2">ID photo (JPG/PNG)</span>
          <input type="file" accept="image/*" onChange={(e) => setIdFile(e.target.files?.[0] || null)} className="text-black bg-white rounded-xl p-2"/>
        </label>
      </div>

      <div className="space-y-2">
        <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/10 aspect-video grid place-items-center">
          <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
        </div>
        <p className="text-sm text-gray-300">Make sure your face is centered and well-lit.</p>
      </div>

      <button onClick={onVerify} disabled={working || !modelsReady} className="px-6 py-3 rounded-xl bg-purple-600">
        {working ? "Verifying..." : (modelsReady ? "Verify now" : "Loading models...")}
      </button>
    </div>
  );
}

function averageDescriptor(list: number[][]): number[] {
  const n = list.length;
  const len = list[0].length;
  const out = new Array(len).fill(0);
  for (const v of list) for (let i = 0; i < len; i++) out[i] += v[i];
  for (let i = 0; i < len; i++) out[i] /= n;
  return out;
}

function cosineDistance(a: number[], b: number[]) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  const sim = dot / (Math.sqrt(na) * Math.sqrt(nb));
  return 1 - sim;
}

function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = reader.result as string;
    };
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
      }
