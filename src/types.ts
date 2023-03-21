export type Config = GroupField[];

export interface GroupField {
  id: string;
  type: 'inputText' | 'inputEmail' | 'inputPassword';
  label: string;
  required?: boolean;
  defaultValue?: string;
}
