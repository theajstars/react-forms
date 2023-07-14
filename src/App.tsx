import React, { useState } from "react";
import Button, { ButtonProps } from "./Components/Button";
import CheckBox, { CheckBoxProps } from "./Components/CheckBox";
import TextField, { TextFieldProps } from "./Components/TextField";

function App() {
  const [email, setEmail] = useState<string>("");
  const [someBull, setSomeBull] = useState<boolean>(false);

  const textInputProps: TextFieldProps = {
    label: "Email",
    placeholder: "Enter your email",
    value: email,
    onChange: (e) => setEmail(e.target.value),
    error: email.length === 0,
    showBorder: true,
    spellCheck: false,
    inputSize: "md",
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
    style: {
      margin: "10px",
    },
  };
  const checkBoxProps: CheckBoxProps = {
    checkboxStyle: {
      margin: "10px",
    },
    value: someBull,
    onChange: (e) => {
      console.log(e);
      setSomeBull(e);
    },
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
        <CheckBox {...checkBoxProps} />
        <CheckBox status="success" size="sm" {...checkBoxProps} />
        <CheckBox status="error" size="sm" {...checkBoxProps} />
        <CheckBox status="warning" size="sm" {...checkBoxProps} />
        <CheckBox status="info" size="sm" {...checkBoxProps} />
        <CheckBox size="lg" {...checkBoxProps} />
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
        <Button status="success" {...buttonProps} variant="filled" />
        <Button status="success" {...buttonProps} variant="outlined" />
        <Button
          status="success"
          {...buttonProps}
          variant="outlined"
          showIcon={false}
        />
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
        <Button status="error" {...buttonProps} variant="filled" />
        <Button status="error" {...buttonProps} variant="outlined" />
        <Button
          status="error"
          {...buttonProps}
          variant="outlined"
          showIcon={false}
        />
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
        <Button status="warning" {...buttonProps} variant="filled" />
        <Button status="warning" {...buttonProps} variant="outlined" />
        <Button
          status="warning"
          {...buttonProps}
          variant="outlined"
          showIcon={false}
        />
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
        <Button status="info" {...buttonProps} variant="filled" />
        <Button status="info" {...buttonProps} variant="outlined" />
        <Button
          status="info"
          {...buttonProps}
          variant="outlined"
          showIcon={false}
        />
      </div>
      <br />
    </div>
  );
}

export default App;
