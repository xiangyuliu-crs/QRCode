import React from "react";
import Dropdown from "./DropdownComponent.tsx";
import QRCode from "./QRCodeComponent.tsx";
import { DROPDOWN_OPTIONS } from "./Helper";

const GenerateQRCode = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);

  const dropdownChangeHandler = (event) => {
    setSelectedValue(event.target.value);
    setButtonClicked(false);
  };

  return (
    <React.Fragment>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder={{ value: "", label: "select your option" }}
        selectedValue={selectedValue}
        onChange={dropdownChangeHandler}
      />
      {buttonClicked && !selectedValue && (
        <span>Please select a value to generate a QR code</span>
      )}
      <button onClick={() => setButtonClicked(true)}>Generate QR Code</button>
      <QRCode valueForQRCode={selectedValue} />
    </React.Fragment>
  );
};

export default GenerateQRCode;
