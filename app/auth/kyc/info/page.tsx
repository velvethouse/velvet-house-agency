import Link from "next/link";

export default function KycInfoPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Identity Verification</h1>
      <p>
        To protect our community, you must verify your identity before using ClairVoyance Pacifica.
        We will ask you to upload an ID (passport or national ID) and record a short selfie video
        (turn your head left and right). The system will automatically match your face with the ID photo.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Verification takes about 1 minute.</li>
        <li>Data is stored securely and deleted after verification.</li>
        <li>No data is shared with third parties.</li>
      </ul>
      <div className="flex gap-3">
        <Link href="/profile" className="px-4 py-2 rounded-xl bg-gray-700">Cancel</Link>
        <Link href="/auth/kyc" className="px-4 py-2 rounded-xl bg-purple-600">I understand and agree</Link>
      </div>
    </div>
  );
}
