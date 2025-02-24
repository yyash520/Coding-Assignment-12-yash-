export interface RadioButtonProps {
  name: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}
