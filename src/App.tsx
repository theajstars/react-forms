import React, { useState } from "react";
import Button, { ButtonProps } from "./Components/Button";
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
    type: "password",
    errorMessage: "An error occured",
    inputStyle: {
      // borderColor: "red",
      // backgroundColor: "green",
    },
  };

  const buttonProps: ButtonProps = {
    label: "Help!",
    // status: "success",
    showIcon: true,
    size: "md",
    variant: "filled",
    onClick: () => alert("Beans"),
  };
  return (
    <div className="App">
      <br />
      <div style={{ padding: "20px", width: "100%", boxSizing: "border-box" }}>
        <TextField {...textInputProps} />
      </div>
      <div
        style={{
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Button {...buttonProps} />
        <Button {...buttonProps} variant="filled" />
        <Button status="success" {...buttonProps} />
      </div>
      <br />
    </div>
  );
}

export default App;
