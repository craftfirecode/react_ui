import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio: React.FC<RadioProps> = ({ label = "String", ...props }) => {
  const id = props.id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="form-check">
      <input
        type="radio"
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

export default Radio;
