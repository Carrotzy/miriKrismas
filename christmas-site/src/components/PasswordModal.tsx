import { useState } from "react";

interface PasswordModalProps {
  onSuccess: () => void;
}

const PasswordModal = ({ onSuccess }: PasswordModalProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password === "niamh") {
      onSuccess();
    } else {
      setError("Wrong password 💔");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Enter Password 💜</h2>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

        <button onClick={handleSubmit}>Continue</button>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default PasswordModal;
