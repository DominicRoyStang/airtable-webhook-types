import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#multilinetext
export const multilineTextCellSchema = z.string()
export type MultilineTextCell = z.infer<typeof multilineTextCellSchema>

export const multilineTextFieldSchema = z.object({ type: z.literal('multilineText') })
export type MultilineTextField = z.infer<typeof multilineTextFieldSchema>
