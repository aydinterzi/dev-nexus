"use client";

import React, { useState } from "react";

export default function FilterSidebar() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);

  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];
  const types = ["Freelance", "Full-time", "Part-time"];

  const handleSkillChange = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="w-64 border-r p-4">
      <h3 className="font-bold text-lg mb-4">Filtreler</h3>
      <div>
        <h4 className="font-semibold mb-2">Beceriler</h4>
        {skills.map((skill) => (
          <div key={skill}>
            <input
              type="checkbox"
              id={skill}
              value={skill}
              onChange={() => handleSkillChange(skill)}
            />
            <label htmlFor={skill} className="ml-2">
              {skill}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Tür</h4>
        {types.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              id={type}
              value={type}
              onChange={() => handleTypeChange(type)}
            />
            <label htmlFor={type} className="ml-2">
              {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
