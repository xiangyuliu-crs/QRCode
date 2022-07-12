import React from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownListProps {
  options: DropdownOption[];
  placeholder?: string;
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const { options, placeholder } = props;
  return (
    <React.Fragment>
      <select>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default DropdownList;
