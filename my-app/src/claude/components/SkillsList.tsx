export interface Skill {
  id: number;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}

export interface SkillsListProps {
  skills: Skill[];
}

const colorLookup = {
  beginner: "gray",
  intermediate: "green",
  advanced: "yellow",
};

export const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <ul>
      {skills.map((s) => (
        <>
          <li
            key={s.id}
            onMouseEnter={() => console.log(`Hovering: ${s.name}`)}
          >
            {s.name} -{" "}
            {s.level === "advanced" ? (
              <b style={{ color: colorLookup[s.level] }}>{s.level}</b>
            ) : (
              <span>{s.level}</span>
            )}
            {/* {colorLookup[s.level]} */}
          </li>
        </>
      ))}
    </ul>
  );
};
