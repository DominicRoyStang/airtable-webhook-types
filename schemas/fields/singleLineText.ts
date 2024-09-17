import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#simpletext
export const singleLineTextCellSchema = z.string().nullable()
export type SingleLineTextCell = z.infer<typeof singleLineTextCellSchema>

export const singleLineTextFieldSchema = z.object({ type: z.literal('singleLineText') })
export type SingleLineTextField = z.infer<typeof singleLineTextFieldSchema>
