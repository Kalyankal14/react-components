import { mockSkills } from "../../Mockdata/Mockdata";
import { Button } from "./Button/Button";
import { Card } from "./Card";
import { ProfileCard } from "./ProfileCard";
import { SkillActions } from "./SkillActions/SkillActions";
import { SkillsList } from "./SkillsList";

export const Claude = () => {
  return (
    <>
      {/* <ProfileCard
        isAvailable
        name="kalyan"
        role="Frontend developer"
        yearsOfExperience={4}
      />
      <SkillsList skills={mockSkills} /> */}
      {/* <Card title="Card1">
        <ProfileCard
          isAvailable
          name="kalyan"
          role="Frontend developer"
          yearsOfExperience={4}
        />
      </Card>
      
      <Card title="Card2" variant="highlighted">
        <SkillsList skills={mockSkills} />
      </Card> 
      {/* <Button onClick={() => alert("Primary Button Clicked")}>
        Primary Button
      </Button>
      <Button
        onClick={() => alert("Secondary Button Clicked")}
        variant="secondary"
      >
        Secondary Button
      </Button>
      <Button onClick={() => alert("Danger Button Clicked")} variant="danger">
        Danger Button
      </Button>
      <Button
        onClick={() => alert("Danger Button Clicked")}
        variant="danger"
        disabled
      >
        Disabled Button
      </Button> */}
      <SkillActions skills={mockSkills} />
    </>
  );
};
