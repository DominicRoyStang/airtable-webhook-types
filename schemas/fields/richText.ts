import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#richtext
export const richTextCellSchema = z.string().nullable()
export type RichTextCell = z.infer<typeof richTextCellSchema>

export const richTextFieldSchema = z.object({ type: z.literal('richText') })
export type RichTextField = z.infer<typeof richTextFieldSchema>
