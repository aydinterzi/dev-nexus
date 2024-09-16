import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[];
  type: string;
  location: string;
};

export default function ProjectCard({
  title,
  description,
  skills,
  type,
  location,
}: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <div className="my-2">
        <strong>Beceriler:</strong>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <p>
        <strong>Tür:</strong> {type}
      </p>
      <p>
        <strong>Konum:</strong> {location}
      </p>
    </div>
  );
}
