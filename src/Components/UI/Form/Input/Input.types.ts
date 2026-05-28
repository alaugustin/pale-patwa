/**
 * Defines the properties for an input component.
 *
 * @property {string} type - The type of the input (e.g. 'text', 'number', 'email').
 * @property {string} placeholder - The placeholder text to display in the input.
 * @property {string} value - The current value of the input.
 * @property {string} [className] - An optional CSS class name to apply to the input.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - A callback function to handle changes to the input value.
 */

export interface IInputProps {
  type: string
  placeholder: string
  value: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
