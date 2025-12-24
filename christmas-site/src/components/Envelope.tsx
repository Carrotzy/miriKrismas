import { useState } from "react";

const Envelope = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="envelope-container">
      <div className="snow"></div>

      <div
        className={`envelope ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="letter">
          <p><strong>Hi, love.</strong></p>
          <p>
            Merry Christmas po <br /><br />
            Wishing you a Christmas filled with joy and laughter! <br /><br />
            Hope to see you soon. Love you po.
          </p>
        </div>

        <div className="back" />

        <div className="front" />

        <div className="top" />
      </div>
    </div>
  );
};

export default Envelope;
