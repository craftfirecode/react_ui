import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  floating?: boolean;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label = "Label", type = "text", floating, ...props }, ref) => {
    if (floating) {
      return (
        <div className="form-floating">
          <input
            type={type}
            className={cn("form-control", className)}
            placeholder="placeholder-floating"
          />
          <label>{label}</label>
        </div>
      );
    }
    return (
      <div>
        <label className="form-label">{label}</label>
        <input
          type={type}
          className={cn("form-control", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
