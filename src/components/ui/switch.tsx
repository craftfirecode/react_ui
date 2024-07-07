import React, { useRef } from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Switch: React.FC<SwitchProps> = ({ label = "String", ...props }) => {
  const switchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form-check form-switch">
      <input
        type="checkbox" 
        className="form-check-input"
        ref={switchRef}
        {...props}
      />
      <label className="form-check-label" onClick={() => switchRef.current?.click()}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
