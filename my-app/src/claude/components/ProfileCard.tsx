export interface ProfileDetails {
  name: string;
  role: string;
  yearsOfExperience: number;
  isAvailable: boolean;
}

export const ProfileCard = ({
  name,
  role,
  yearsOfExperience,
  isAvailable,
}: ProfileDetails) => {
  return (
    //using react fragments to avoid unnecessary div wrapper, if we need to style this component then we can use div which gives scope to style the component using className attribute inside div element
    <>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{`I'm having ${yearsOfExperience} years of experience`}</p>
      <p>{isAvailable ? "Available for hire" : "Not available"}</p>
    </>
  );
};
