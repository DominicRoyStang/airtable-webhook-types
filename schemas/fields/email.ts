import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#emailtext
export const emailCellSchema = z.string().email().nullable()
export type EmailCell = z.infer<typeof emailCellSchema>

export const emailFieldSchema = z.object({ type: z.literal('email') })
export type EmailField = z.infer<typeof emailFieldSchema>
