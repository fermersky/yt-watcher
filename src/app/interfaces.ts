import { ValidatorFn } from '@angular/forms';

export interface IVideo {
  videoId: string;
  player: any;
  title: string;
  status: 'onPlay' | 'onPause';
  statusChanged?: (status: string) => void;
}

export interface IFormField {
  name: string;
  type: FieldType;
  value?: any;
  label?: string;
  placeholder?: string;
  options?: { value: string; display: string }[];
  validators?: ValidatorFn | ValidatorFn[];
}

export enum FieldType {
  String,
  Number,
  Checkbox,
  Text,
  Radio,
  Select,
}

export declare type IFormFields = IFormField[];
