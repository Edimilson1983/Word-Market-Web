import "./index.css";

export const Input = ({ label, placeholder }) => {
  return (
    <div className="input-home">
      <span>{label}</span>
      <input placeholder={placeholder} />
    </div>
  );
};
