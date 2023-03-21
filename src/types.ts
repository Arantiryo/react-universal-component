export type Config = GroupField[];
export type RenderGroupProps = {
  config: Config;
};
export type InputProps = {
  field: GroupField;
  setValues: (id: string, newValue: string) => void;
  // values: Record<string, string>;
};

export type RenderGroupExposedMethods = {
  getCurrentValues: () => Record<string, string>;
};

export interface GroupField {
  id: string;
  type: 'inputText' | 'inputEmail' | 'inputPassword';
  label: string;
  required?: boolean;
  defaultValue?: string;
}
