import "./ProfileCard.css";

export interface ProfileInfo {
  name: string;
  role: string;
  description: string;
  location: string;
  skills: string[];
  onLike: () => void;
}

export function ProfileCard({
  name,
  description,
  role,
  location,
  skills,
  onLike,
}: ProfileInfo) {
  const handleFollow = () => console.log(`${name} followed the profile`);
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`
      Liked: ${name}
      Button text: ${e.currentTarget.textContent}
      `);
  };
  return (
    <div className="card">
      <h1 className="name">{name}</h1>
      <h2 className="role">{role}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <h3>Skills</h3>
      <p>{skills[0]}</p>
      <p>{skills[1]}</p>
      <p>{skills[2]}</p>
      <p>{skills[3]}</p>
      <button onClick={onLike}>Like</button>
      <button onClick={handleFollow}>Follow</button>
    </div>
  );
}
