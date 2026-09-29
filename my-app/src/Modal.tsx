export interface ModalProps {
  title: string;
  description: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export function Modal({
  title,
  description,
  body,
  footer,
  children,
  className,
  onConfirm,
  onCancel,
}: ModalProps) {
  return (
    <div className={className ? `modal ${className}` : "modal"}>
      <div> {title}</div>
      <div> {description}</div>
      {!children ? <div> {body}</div> : <div>{children}</div>}
      <div>
        {footer}
        {onConfirm && <button onClick={onConfirm}>Confirm</button>}
        {onCancel && <button onClick={onCancel}>Cancel</button>}
      </div>
    </div>
  );
}
