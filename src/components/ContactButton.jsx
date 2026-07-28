import { useContact } from "../context/ContactContext";

export default function ContactButton({ children, className, onClick, ...props }) {
  const { openContactModal } = useContact();

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        openContactModal();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
