import React, { useRef } from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio: React.FC<RadioProps> = ({ label = "String", ...props }) => {
  const radioRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form-check">
      <input
        type="radio"
        className="form-check-input"
        ref={radioRef}
        {...props}
      />
      <label className="form-check-label" onClick={() => radioRef.current?.click()}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
