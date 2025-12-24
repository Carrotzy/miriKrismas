import { useState } from "react";
import PasswordModal from "./components/PasswordModal";
import Envelope from "./components/Envelope";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && <PasswordModal onSuccess={() => setUnlocked(true)} />}

      {unlocked && (
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <h1>🎄 Merry Christmas 🎄</h1>
          <p>For someone very special yie</p>

          <Envelope />

          <p className="hint">Hover or tap the envelope!</p>
        </div>
      )}
    </>
  );
}

export default App;
