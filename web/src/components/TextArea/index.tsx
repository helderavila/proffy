import React, { TextareaHTMLAttributes } from 'react';

// Styles
import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest} />
  </div>
);

export default TextArea;
