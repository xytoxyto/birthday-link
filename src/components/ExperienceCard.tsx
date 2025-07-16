
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  image: string;
  name: string;
  description: string;
  tier: string;
}

const tierColors: Record<string, string> = {
  Galaxy: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white",
  Elite: "bg-gradient-to-r from-yellow-400 to-yellow-700 text-black",
  Cosmic: "bg-gradient-to-r from-blue-400 to-blue-800 text-white",
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, name, description, tier }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white/5 border border-white/10 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
        <p className="text-white/80 mb-3 flex-1">{description}</p>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mt-auto ${tierColors[tier] || "bg-gray-200 text-gray-800"}`}>
          {tier}
        </span>
      </div>
    </div>
  );
};
