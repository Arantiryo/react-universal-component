import {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Config, GroupField, RenderGroupProps } from '../../types';
import Field from '../Field/Field';
import './RenderGroup.css';

const getDefaultFieldValues = (config: Config) =>
  config.reduce((acc, cur) => {
    acc[cur.id] = cur.defaultValue || '';
    return acc;
  }, {} as Record<string, string>);

const RenderGroup: FC<RenderGroupProps> = forwardRef((props, ref) => {
  const { config, setSubmitDisabled } = props;
  const [values, setValues] = useState(getDefaultFieldValues(config));

  const validateFields = (values: Record<string, string>) => {
    return config.filter((item) => item.required && values[item.id] === '');
  };

  useEffect(() => {
    if (validateFields(values).length === 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [values]);

  useImperativeHandle(
    ref,
    () => {
      return {
        getCurrentValues() {
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
    <div className="render-group">
      {config.map((field: GroupField) => {
        return (
          <Field key={field.id} field={field} setValues={updateFieldValue} />
        );
      })}
    </div>
  );
});

export default RenderGroup;
