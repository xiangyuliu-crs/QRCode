import React from "react";
import "./DropdownComponent.css";

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

const OPTIONS_SIZE_LIMIT = 5;

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const { options, placeholder, selectedValue, onChange } = props;

  const optionsForDropdown =
    options.length > OPTIONS_SIZE_LIMIT
      ? options.slice(0, OPTIONS_SIZE_LIMIT)
      : options;

  return (
    <React.Fragment>
      <div className="selection-field">
        <select value={selectedValue} onChange={onChange}>
          {placeholder && (
            <option value={placeholder.value} disabled>
              {placeholder.label}
            </option>
          )}
          {optionsForDropdown.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};

export default DropdownList;
