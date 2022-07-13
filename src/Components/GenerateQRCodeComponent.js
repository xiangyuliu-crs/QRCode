import React from "react";
import Dropdown from "./DropdownComponent.tsx";
import QRCode from "./QRCodeComponent.tsx";
import { DROPDOWN_OPTIONS } from "./Helper";

const GenerateQRCode = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <React.Fragment>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        placeholder={{ value: "", label: "select your option" }}
        selectedValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <button>Generate QR Code</button>
      <QRCode valueForQRCode={selectedValue} />
    </React.Fragment>
  );
};

export default GenerateQRCode;
