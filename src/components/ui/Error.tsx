import React from "react";

interface ErrorComponentProps {
  message: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorComponentProps> = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
