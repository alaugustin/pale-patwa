export interface IInputProps {
  type: string
  placeholder: string
  value: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
