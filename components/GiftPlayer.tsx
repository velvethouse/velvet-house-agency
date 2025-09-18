"use client";

import Lottie from "react-lottie-player";
import React from "react";

const giftAnimations: Record<string, any> = {
  lotus: require("@/../public/gifts/lotus.json"),
  rose: require("@/../public/gifts/rose.json"),
  heart: require("@/../public/gifts/heart.json"),
  champagne: require("@/../public/gifts/champagne.json"),
  crown: require("@/../public/gifts/crown.json"),
  star: require("@/../public/gifts/star.json"),
  diamond: require("@/../public/gifts/diamond.json"),
  butterfly: require("@/../public/gifts/butterfly.json"),
  fireworks: require("@/../public/gifts/fireworks.json"),
  lightning: require("@/../public/gifts/lightning.json"),
  music: require("@/../public/gifts/music.json"),
  ring: require("@/../public/gifts/ring.json"),
  car: require("@/../public/gifts/car.json"),
  yacht: require("@/../public/gifts/yacht.json"),
  castle: require("@/../public/gifts/castle.json"),
  jet: require("@/../public/gifts/jet.json"),
  lion: require("@/../public/gifts/lion.json"),
  tiger: require("@/../public/gifts/tiger.json"),
  dragon: require("@/../public/gifts/dragon.json"),
  phoenix: require("@/../public/gifts/phoenix.json"),
  worldtour: require("@/../public/gifts/worldtour.json"),
  chocolate: require("@/../public/gifts/chocolate.json"),
  kiss: require("@/../public/gifts/kiss.json"),
  cake: require("@/../public/gifts/cake.json"),
  giftbox: require("@/../public/gifts/giftbox.json"),
  clover: require("@/../public/gifts/clover.json"),
  bow: require("@/../public/gifts/bow.json"),
  candle: require("@/../public/gifts/candle.json"),
  flower: require("@/../public/gifts/flower.json"),
  cocktail: require("@/../public/gifts/cocktail.json"),
  panda: require("@/../public/gifts/panda.json"),
  penguin: require("@/../public/gifts/penguin.json"),
  bear: require("@/../public/gifts/bear.json"),
  koala: require("@/../public/gifts/koala.json"),
  fox: require("@/../public/gifts/fox.json"),
  panther: require("@/../public/gifts/panther.json"),
  horse: require("@/../public/gifts/horse.json"),
  dog: require("@/../public/gifts/dog.json"),
  cat: require("@/../public/gifts/cat.json"),
  giraffe: require("@/../public/gifts/giraffe.json"),
  monkey: require("@/../public/gifts/monkey.json"),
  elephant: require("@/../public/gifts/elephant.json"),
  dolphin: require("@/../public/gifts/dolphin.json"),
  unicorn: require("@/../public/gifts/unicorn.json"),
  crownjewel: require("@/../public/gifts/crownjewel.json"),
  rainbow: require("@/../public/gifts/rainbow.json"),
  starfall: require("@/../public/gifts/starfall.json"),
  sun: require("@/../public/gifts/sun.json"),
  moon: require("@/../public/gifts/moon.json"),
  galaxy: require("@/../public/gifts/galaxy.json"),
};

interface GiftPlayerProps {
  name: string;
  size?: number;
  loop?: boolean;
  play?: boolean;
  speed?: number;
}

export default function GiftPlayer({
  name,
  size = 200,
  loop = false,
  play = true,
  speed = 1,
}: GiftPlayerProps) {
  const animationData = giftAnimations[name];

  if (!animationData) {
    return (
      <div className="text-red-500">
        ❌ Gift "{name}" not found in public/gifts/
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Lottie
        loop={loop}
        play={play}
        animationData={animationData}
        speed={speed}
        style={{ width: size, height: size }}
      />
    </div>
  );
               }
