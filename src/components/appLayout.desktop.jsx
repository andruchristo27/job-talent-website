import React from 'react';

export default function AppLayout({ children }) {

  return (
    <div className="flex flex-row w-full">
      {children}
    </div>
  );
}
