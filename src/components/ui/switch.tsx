import React from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Switch: React.FC<SwitchProps> = ({ label = "String", ...props }) => {
  const id = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        {...props}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
