import { Button } from "../Button/Button";
import { type Skill, type SkillsListProps } from "../SkillsList";

export const SkillActions = ({ skills }: SkillsListProps) => {
  const handleLogSkill = (skill: Skill) => {
    console.log(`${skill.name} - ${skill.level}`);
  };

  const handleRemoveSkill = (skill: Skill) => {
    console.log(`Removing skill: ${skill.name}`);
  };
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.id} onMouseEnter={() => console.log(`Hovering: ${s.name}`)}>
          {s.name} - <span>{s.level}</span>
          <Button onClick={() => handleLogSkill(s)}>Log</Button>
          <Button variant="danger" onClick={() => handleRemoveSkill(s)}>
            {" "}
            Remove{" "}
          </Button>
        </li>
      ))}
    </ul>
  );
};
