import React, { SelectHTMLAttributes } from 'react';

// Styles
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select id={name} {...rest}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
