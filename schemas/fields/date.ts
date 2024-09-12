import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#dateonly
export const dateCellSchema = z.string()
export type DateCell = z.infer<typeof dateCellSchema>

export const dateFieldSchema = z.object({
  type: z.literal('date'),
  options: z.object({
    dateFormat: z.object({
      format: z.enum(['l', 'LL', 'M/D/YYYY', 'D/M/YYYY', 'YYYY-MM-DD']),
      name: z.enum(['local', 'friendly', 'us', 'european', 'iso']),
    }),
  }),
})
export type DateField = z.infer<typeof dateFieldSchema>
