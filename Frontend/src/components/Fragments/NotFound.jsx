import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-900">404</h1>
        <p className="text-2xl font-light text-500">Page not found</p>
        <p className="mt-4 text-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}
