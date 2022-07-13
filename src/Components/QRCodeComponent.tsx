import React from "react";

interface QRCodeProps {
  valueForQRCode: string;
}

const QRCode: React.FC<QRCodeProps> = (props) => {
  const { valueForQRCode } = props;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${valueForQRCode}&size=100x100&color=FFA500`;
  return (
    <React.Fragment>
      {valueForQRCode && <img src={apiUrl} alt="A QR Code" />}
    </React.Fragment>
  );
};

export default QRCode;
