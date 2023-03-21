import { FC } from 'react';
import { InputProps } from '../../types';
import '../Field/Field.css';

const getPropsByType = (type: string, label: string) => {
  if (type === 'inputEmail')
    return {
      inputType: 'email',
      placeholder: 'email@example.com',
    };

  if (type === 'inputPassword')
    return {
      inputType: 'password',
      placeholder: 'Enter password',
    };

  return {
    inputType: 'text',
    placeholder: label,
  };
};

const Field: FC<InputProps> = (props) => {
  const { id, type, label, required } = props.field;
  const { inputType, placeholder } = getPropsByType(type, label);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValues(id, event.target.value);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    props.setValues(id, '');
  };

  return (
    <div className="input-wrapper">
      <label hidden className="input-wrapper__label" htmlFor={id}>
        {label}{' '}
      </label>
      <input
        id={id}
        className="input-wrapper__input"
        type={inputType}
        placeholder={placeholder}
        required={required}
        value={props.values[id]}
        onChange={handleChange}
      />
      <button className="input-wrapper__reset" onClick={handleReset}>
        {props.values[id] !== '' ? 'x' : null}
      </button>
    </div>
  );
};

export default Field;
