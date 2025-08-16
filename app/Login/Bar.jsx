import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%", color: "bg-green-600" },
    { name: "CSS", level: "80%", color: "bg-blue-600" },
    { name: "JavaScript", level: "65%", color: "bg-red-500" },
    { name: "PHP", level: "95%", color: "bg-gray-500" },
  ];

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>

      {skills.map((skill) => (
        <div key={skill.name} className="mb-1">
          <p className="mb-2 font-medium">{skill.name}</p>
          <div className="relative group">
            {/* Colored line */}
            <div className="w-full h-2 bg-gray-300 rounded">
              <div
                className={`h-2 rounded ${skill.color}`}
                style={{ width: skill.level }}
              />
            </div>
            {/* Hover text */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {skill.level}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
