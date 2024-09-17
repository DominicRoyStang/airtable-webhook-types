import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#durationnumber
export const durationCellSchema = z.number().nullable()
export type DurationCell = z.infer<typeof durationCellSchema>

export const durationFieldSchema = z.object({
  type: z.literal('duration'),
  options: z.object({
    durationFormat: z.enum(['h:mm', 'h:mm:ss', 'h:mm:ss.S', 'h:mm:ss.SS', 'h:mm:ss.SSS']),
  }),
})
export type DurationField = z.infer<typeof durationFieldSchema>
