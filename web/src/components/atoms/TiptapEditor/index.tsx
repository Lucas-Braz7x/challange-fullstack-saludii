/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

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
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Markdown.configure({
        transformCopiedText: true,
        transformPastedText: true,
      }),
    ],
    content: value,
    onUpdate({ editor }: any) {
      const markdown = editor.storage.markdown.getMarkdown()
      onChange(markdown)
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label
        htmlFor={id}
        className={`editor-label ${error ? 'editor-error' : ''}`}
      >
        {label}
      </label>
      <EditorContent
        className={`editor-content ${error ? 'editor-error' : ''}`}
        editor={editor}
        id={id}
        required
      />
      {error && (
        <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained Mui-required css-er619e-MuiFormHelperText-root">
          {helperText}
        </p>
      )}
    </div>
  )
}
