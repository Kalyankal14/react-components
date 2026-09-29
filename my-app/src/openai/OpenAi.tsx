import { ProfileCard } from "./ProfileCard";
import "./OpenAi.css";

export function OpenAi() {
  return (
    <div className="card-container">
      <ProfileCard
        name="kalyan"
        role="Frontend developer"
        description="I have 4 years of experience"
        location="Hyderabad"
        skills={["React", "Javascript", "Typescript", "Next.js"]}
        onLike={() => console.log(`Profile was liked`)}
      />
      <ProfileCard
        name="Rahul"
        role="Backend developer"
        description="I have 4 years of experience"
        location="Hyderabad"
        skills={["React", "Javascript", "Typescript", "Next.js"]}
        onLike={() => console.log(`Profile was liked`)}
      />
      <ProfileCard
        name="Priya"
        role="UI/UX Designer"
        description="I have 4 years of experience"
        location="Hyderabad"
        skills={["React", "Javascript", "Typescript", "Next.js"]}
        onLike={() => console.log(`Profile was liked`)}
      />
    </div>
  );
}
