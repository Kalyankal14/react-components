import "./Button.css";
// import styles from"./Button.module.css";
type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant} ${className ?? ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
