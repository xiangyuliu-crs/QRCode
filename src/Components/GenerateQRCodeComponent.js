import React from "react";
import Dropdown from "./DropdownComponent.tsx";
import QRCode from "./QRCodeComponent.tsx";
import { DROPDOWN_OPTIONS } from "./Helper";
import ErrorMessage from "./ErrorMessage.tsx";
import "./GenerateQRCodeComponent.scss";

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
      <div className="generate-qrcode">
        <div className="qrcode-button">
          <button className="button" onClick={buttonClickHandler}>
            Generate QR Code
          </button>
        </div>
        <div className="selection-field">
          <Dropdown
            options={DROPDOWN_OPTIONS}
            placeholder={{ value: "", label: "Select your option" }}
            selectedValue={selectedValue}
            onChange={dropdownChangeHandler}
          />
          <ErrorMessage
            isShown={buttonClicked && !selectedValue}
            message="Please select a value to generate a QR code"
            className="error-message"
          />
        </div>
        <div className="qrcode">
          <QRCode valueForQRCode={valueForQRCode} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenerateQRCode;
