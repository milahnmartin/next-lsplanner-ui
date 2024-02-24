"use client";

import React, { useState, useEffect, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
    };
    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="text-white flex items-center justify-center">
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
