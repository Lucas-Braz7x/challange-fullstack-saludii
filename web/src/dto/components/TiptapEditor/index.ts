export interface TiptapEditorProps {
  value: string
  onChange: (markdown: string) => void
  label: string
  id: string
  error: boolean
  helperText: string | string[]
}
