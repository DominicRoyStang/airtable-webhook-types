import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#decimalorintegernumber
export const numberCellSchema = z.number()
export type NumberCell = z.infer<typeof numberCellSchema>

export const numberFieldSchema = z.object({
  type: z.literal('number'),
  options: z.object({ precision: z.number() }),
})
export type NumberField = z.infer<typeof numberFieldSchema>
