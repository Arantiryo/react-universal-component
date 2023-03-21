import { FC, forwardRef, useImperativeHandle, useState } from 'react';
import { Config, GroupField, RenderGroupProps } from '../types';
import Field from './field/Field';
import './RenderGroup.css';

const getDefaultFieldValues = (config: Config) =>
  config.reduce((acc, cur) => {
    acc[cur.id] = cur.defaultValue || '';
    return acc;
  }, {} as Record<string, string>);

const RenderGroup: FC<RenderGroupProps> = forwardRef((props, ref) => {
  const { config } = props;
  const defaultFieldValues = getDefaultFieldValues(config);
  const [values, setValues] = useState(defaultFieldValues);

  useImperativeHandle(
    ref,
    () => {
      return {
        getCurrentValues() {
          console.log(values);
          return values;
        },
      };
    },
    [values]
  );

  const updateFieldValue = (id: string, newValue: string) => {
    setValues({
      ...values,
      [id]: newValue,
    });
  };

  return (
    <div>
      {config.map((field: GroupField) => {
        return (
          <Field key={field.id} field={field} setValues={updateFieldValue} />
        );
      })}
    </div>
  );
});

export default RenderGroup;
