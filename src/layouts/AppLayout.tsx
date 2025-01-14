import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="layout-container">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
