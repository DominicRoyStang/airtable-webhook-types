import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#button
export const buttonCellSchema = z.object({
  label: z.string(),
  url: z.string().url().nullable(),
})
export type ButtonCell = z.infer<typeof buttonCellSchema>

export const buttonFieldSchema = z.object({ type: z.literal('button') })
export type ButtonField = z.infer<typeof buttonFieldSchema>
