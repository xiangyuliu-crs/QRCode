import React from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownListProps {
  options: DropdownOption[];
  placeholder?: DropdownOption;
  selectedValue: string;
  onChange: (e) => void;
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const { options, placeholder, selectedValue, onChange } = props;

  return (
    <React.Fragment>
      <select value={selectedValue} onChange={onChange}>
        {placeholder && (
          <option value={placeholder.value} disabled>
            {placeholder.label}
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
