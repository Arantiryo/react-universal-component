import { FC } from 'react';
import { InputProps } from '../../types';

const getPropsByType = (type: string, label: string) => {
  if (type === 'inputEmail')
    return {
      inputType: 'email',
      placeholder: 'email@example.com',
    };

  if (type === 'inputPassword')
    return {
      inputType: 'password',
      placeholder: 'Введите пароль',
    };

  return {
    inputType: 'text',
    placeholder: label,
  };
};

const Field: FC<InputProps> = (props) => {
  const { id, type, label, required, defaultValue } = props.field;
  const { inputType, placeholder } = getPropsByType(type, label);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValues(id, event.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
