import type { ReactNode } from "react";

export interface CardProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "highlighted";
}
export const Card = ({ title, children, variant = "default" }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: variant === "highlighted" ? "red" : undefined,
        padding: "14px",
        border: "1px solid #7cd73f",
        borderRadius: "14px",
      }}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
};
