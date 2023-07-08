import React, { useState } from "react";
import TextField, { TextFieldProps } from "./Components/TextField";

function App() {
  const [email, setEmail] = useState<string>("");

  const textInputProps: TextFieldProps = {
    label: "Email",
    placeholder: "Enter your email",
    value: email,
    onChange: (e) => setEmail(e.target.value),
    error: email.length === 0,
    showBorder: true,
    spellCheck: false,
    size: "md",
  };
  return (
    <div className="App">
      <br />
      <div style={{ padding: "20px", width: "350px" }}>
        <TextField {...textInputProps} />
      </div>
      <br />
    </div>
  );
}

export default App;
