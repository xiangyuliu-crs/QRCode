import React from "react";
import "./ErrorMessage.css";

interface ErrorMessageProps {
  isShown: boolean;
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { isShown, message, className } = props;
  const updatedClass = className ? `error-msg ${className}` : "error-msg";
  return (
    <React.Fragment>
      {isShown && <div className={updatedClass}>{message}</div>}
    </React.Fragment>
  );
};

export default ErrorMessage;
