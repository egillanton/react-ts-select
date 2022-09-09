import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  backgroundColor?: string;
  color?: string;
}

export function Select({ label, options, backgroundColor, color, style }: SelectProps) {
	let _style = {
		backgroundColor: backgroundColor,
		color: color,
		...style
	};

  return (
    <div>
      <label>{label}</label>
      <select style={_style}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
