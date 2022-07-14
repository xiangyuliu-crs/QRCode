import React, { useState } from "react";
import QRCoder from "qrcode";

interface QRCodeProps {
  valueForQRCode: string;
}

const QRCode: React.FC<QRCodeProps> = (props) => {
  const { valueForQRCode } = props;
  const [imgSrc, setImgSrc] = useState("");

  React.useEffect(() => {
    valueForQRCode &&
      QRCoder.toDataURL(valueForQRCode, {
        color: { dark: "#fff", light: "#FFA500" },
      })
        .then((data) => setImgSrc(data))
        .catch((e) => console.log(e));
  });

  return (
    <React.Fragment>
      {imgSrc && <img src={imgSrc} alt="A QR Code" />}
    </React.Fragment>
  );
};

export default QRCode;
