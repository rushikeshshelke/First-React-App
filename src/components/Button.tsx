interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
}

const Button = ({ text, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
