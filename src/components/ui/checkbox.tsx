import React, { useRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label = "String", ...props }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        ref={checkboxRef}
        {...props}
      />
      <label className="form-check-label" onClick={() => checkboxRef.current?.click()}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
