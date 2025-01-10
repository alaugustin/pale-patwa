/**
 * Defines the props for the DictionarySearch component.
 * @interface IDictionarySearchProps
 * @property {string} placeholderLabel - The placeholder text to display in the search input.
 * @property {string} searchValue - The current value of the search input.
 * @property {(value: string) => void} onChangeFunc - A function to call when the search input value changes.
 * @property {() => void} onClickFunc - A function to call when the search button is clicked.
 */

export interface IDictionarySearchProps {
  placeholderLabel: string
  searchValue: string
  onChangeFunc: (value: string) => void
  onClickFunc: () => void
}
