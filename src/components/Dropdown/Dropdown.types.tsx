export interface DropdownProps {
  options: string[];
  onChange: (selected: string) => void;
  disabled?: boolean;
}
