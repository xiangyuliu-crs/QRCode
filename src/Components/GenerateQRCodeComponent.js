import React from "react";
import Dropdown from "./DropdownComponent.tsx";
import QRCode from "./QRCodeComponent.tsx";
import { DROPDOWN_OPTIONS } from "./Helper";
import ErrorMessage from "./ErrorMessage.tsx";
import "./GenerateQRCodeComponent.css";

const GenerateQRCode = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [valueForQRCode, setValueForQRCode] = React.useState("");

  const dropdownChangeHandler = (event) => {
    setSelectedValue(event.target.value);
    setButtonClicked(false);
  };

  const buttonClickHandler = () => {
    setButtonClicked(true);
    setValueForQRCode(selectedValue);
  };

  return (
    <React.Fragment>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder={{ value: "", label: "select your option" }}
        selectedValue={selectedValue}
        onChange={dropdownChangeHandler}
      />
      <ErrorMessage
        isShown={buttonClicked && !selectedValue}
        message="Please select a value to generate a QR code"
      />
      <button className="button" onClick={buttonClickHandler}>
        Generate QR Code
      </button>
      <QRCode valueForQRCode={valueForQRCode} />
    </React.Fragment>
  );
};

export default GenerateQRCode;
