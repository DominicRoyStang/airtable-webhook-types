import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#percentnumber
export const percentCellSchema = z.number()
export type PercentCell = z.infer<typeof percentCellSchema>

export const percentFieldSchema = z.object({
  type: z.literal('percent'),
  options: z.object({ precision: z.number() }),
})
export type PercentField = z.infer<typeof percentFieldSchema>
