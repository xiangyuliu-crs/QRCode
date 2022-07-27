import React, { useState } from "react";
import QRCoder from "qrcode";
import MessageModal from "./Modal/MessageModal";

interface QRCodeProps {
  valueForQRCode: string;
}

const QRCode: React.FC<QRCodeProps> = (props) => {
  const { valueForQRCode } = props;
  const [imgSrc, setImgSrc] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);

  React.useEffect(() => {
    valueForQRCode &&
      QRCoder.toDataURL(valueForQRCode, {
        color: { dark: "#fff", light: "#FF6D00" },
      })
        .then((data) => {
          setImgSrc(data);
          setShowMessageModal(true);
        })
        .catch((e) => console.log(e));
  }, [valueForQRCode]);

  return (
    <React.Fragment>
      {imgSrc && <img src={imgSrc} alt="A QR Code" />}
      <MessageModal
        showModal={showMessageModal}
        setShowModal={setShowMessageModal}
        modalHeader="QR Code Generated"
        modalBody="Your QR code has been generated successfully. Thank you for using QR Code App."
      />
    </React.Fragment>
  );
};

export default QRCode;
