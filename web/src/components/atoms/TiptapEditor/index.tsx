/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

import { Typography as TypographyMUI } from '@mui/material'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'

import './styles.scss'
import { TiptapEditorProps } from 'src/dto/components'

export const TiptapEditor = ({
  value,
  onChange,
  label,
  id,
  helperText,
  error,
}: TiptapEditorProps) => {
  const editor: any = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Markdown.configure({
        transformCopiedText: true,
        transformPastedText: true,
      }),
    ],
    onUpdate({ editor }: any) {
      const markdown = editor.storage.markdown.getMarkdown()
      onChange(markdown)
    },
  })

  useEffect(() => {
    const currentMarkdown = editor.storage.markdown.getMarkdown()

    if (value !== currentMarkdown) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label
        htmlFor={id}
        className={`editor-label ${error ? 'editor-error' : ''}`}
      >
        <TypographyMUI variant="body1">{label}</TypographyMUI>
      </label>
      <EditorContent
        className={`editor-content ${error ? 'editor-error' : ''}`}
        editor={editor}
        id={id}
        required
      />
      {error && <p className="error-message">{helperText}</p>}
    </div>
  )
}
