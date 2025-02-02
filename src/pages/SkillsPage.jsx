import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../utils/data.json";

export const SkillsPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  useEffect(() => {
    if (name) {
      const skillElement = document.getElementById(name);
      if (skillElement) {
        skillElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedSkill(name);

        // Remove highlight after 3 seconds
        setTimeout(() => setHighlightedSkill(null), 1000);
      }
    }
  }, [name]);

  return (
    <section className="text-center">
      <div className="grid grid-cols-2 p-5 md:p-10 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {data.skills.map((skill) => (
          <div
            key={skill.id}
            id={skill.name}
            className={`flex bg-zinc-800 p-6 rounded-lg flex-col items-center shadow-lg transition-all duration-200 hover:bg-zinc-700 hover:shadow-xl 
            ${highlightedSkill === skill.name ? "ring-4 shadow ring-blue-500" : ""}`}
          >
            <img
              src={`/assets/skillIcons/${skill.name}.svg`}
              width="120"
              alt={skill.name}
              className="mb-4"
            />
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
