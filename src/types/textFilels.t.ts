import { Message, ValidationRule } from "react-hook-form";
export type TextAriaType = Exclude<TextFieldType, "variant" | "labelVariant"> &
  React.ComponentProps<"textarea"> & {
    variant: "outLine" | "freeMode";
    size?: "medium" | "free";
    required?: boolean;
    validattionschema?: RegisterOptions;
    readOnly?: boolean;
  };

export type RegisterOptions = Partial<{
  required?: Message | ValidationRule<boolean>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number | string>;
  minLength?: ValidationRule<number | string>;
  pattern?: ValidationRule<RegExp>;
  validate?: Record<string, any>;
}>;
export type TextFieldType = {
  label?: string;
  type: string;
  id: string;
  placeHolder?: string;
  name: string;
  value?: string | number;
  className?: string;
  required?: boolean;
  register: any;
  errors: any;
  readOnly?: boolean;
  wrapperStyle?: string;
} & React.ComponentProps<"input">;
