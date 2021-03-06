import React from 'react';
import { ISelectProps } from './selectTypes';

const Select = ({
  options = [],
  errors = {},
  name,
  register,
  rules,
  placeholder,
  multiple,
  defaultValue = multiple ? [] : 'none',
  ...props
}: ISelectProps): React.ReactElement => {
  return (
    <div className={`form-select${errors[name] ? ' error' : ''}`}>
      <select
        {...props}
        name={name}
        ref={register && register(rules)}
        defaultValue={defaultValue}
        multiple={multiple}
      >
        {placeholder && (
          <option value="none" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((item, i) => (
          <option key={`${item.value}-${item.label}-${i}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {!rules?.required && <div className="optional">* Optional</div>}
    </div>
  );
};

export default Select;
