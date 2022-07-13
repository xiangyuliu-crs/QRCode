import React from "react";

interface ErrorMessageProps {
  isShown: boolean;
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { isShown, message, className } = props;
  return (
    <React.Fragment>
      {isShown && <div className={className}>{message}</div>}
    </React.Fragment>
  );
};

export default ErrorMessage;
