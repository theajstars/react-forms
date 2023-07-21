import React, { useState } from "react";
import Button, { ButtonProps } from "./Components/Button";
import CheckBox, { CheckBoxProps } from "./Components/CheckBox";
import RadioGroup, { Radio, RadioGroupProps } from "./Components/RadioGroup";
import Select, { SelectProps } from "./Components/Select";
import TextField, { TextFieldProps } from "./Components/TextField";

function App() {
  const [email, setEmail] = useState<string>("");
  const [someBull, setSomeBull] = useState<boolean>(false);
  const [someRadioValue, setSomeRadioValue] = useState<any>("");
  const [someSelectValue, setSomeSelectValue] = useState<any>("");

  const selectOptions = [
    { label: "Dr Braavosi", value: "Lord Braavo" },
    { label: "Stallone", value: "Stalls" },
    { label: "Bing", value: "Bing Bang Buck" },
    { label: "Chillin", value: "Bing Chillin" },
    { label: "When", value: "Ever" },
    { label: "Lorem", value: "Ipsum" },
    { label: "Deez", value: "Nutz" },
    { label: "Agatha", value: "Christie" },
    { label: "Winchester", value: "97" },
    { label: "Dr Braavosi", value: "Lord Braavo" },
    { label: "Stallone", value: "Stalls" },
    { label: "Bing", value: "Bing Bang Buck" },
    { label: "Chillin", value: "Bing Chillin" },
    { label: "When", value: "Ever" },
    { label: "Lorem", value: "Ipsum" },
    { label: "Deez", value: "Nutz" },
    { label: "Agatha", value: "Christie" },
    { label: "Winchester", value: "97" },
  ];

  const textInputProps: TextFieldProps = {
    label: "Email",
    placeholder: "Enter your email",
    value: email,
    onChange: (e) => setEmail(e.target.value),
    error: someBull,
    showBorder: true,
    spellCheck: false,
    inputSize: "md",
    type: "text",
    errorMessage: "Please input some null error",
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
    style: {
      margin: "10px",
    },
    label: "Toggle Error",
    value: someBull,
    onChange: (e) => {
      console.log(e);
      setSomeBull(e);
    },
  };
  const radioGroupProps: Omit<RadioGroupProps, "children"> = {
    onChange: (e) => {
      console.log(e);
      setSomeRadioValue(e);
    },
    value: someRadioValue,
  };
  const selectProps: SelectProps = {
    value: someSelectValue,
    onChange: (e) => {
      console.log(e);
    },
    options: selectOptions,
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
      ></div>
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
      <div
        style={{
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <RadioGroup status="success" {...radioGroupProps}>
          <Radio value={12} label="Choose 12" />
          <Radio value={24} label="Choose 24" />
        </RadioGroup>
        <RadioGroup status="default" {...radioGroupProps}>
          <Radio value={12} label="Choose 12" />
          <Radio value={24} label="Choose 24" />
        </RadioGroup>
        <RadioGroup status="info" {...radioGroupProps}>
          <Radio value={12} label="Choose 12" />
          <Radio value={24} label="Choose 24" />
        </RadioGroup>
        <RadioGroup size="lg" status="error" {...radioGroupProps}>
          <Radio value={12} label="Choose 12" />
          <Radio value={24} label="Choose 24" />
        </RadioGroup>
        <RadioGroup size="sm" status="warning" {...radioGroupProps}>
          <Radio value={12} label="Choose 12" />
          <Radio value={24} label="Choose 24" />
        </RadioGroup>
      </div>
      <br />
      <div
        style={{
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Select {...selectProps} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
