import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#dateandtime
export const dateTimeCellSchema = z.string().datetime()
export type DateTimeCell = z.infer<typeof dateTimeCellSchema>

export const dateTimeFieldSchema = z.object({
  type: z.literal('dateTime'),
  options: z.object({
    timeZone: z.string(), // This type is incomplete. See documentation.
    dateFormat: z.object({
      format: z.enum(['l', 'LL', 'M/D/YYYY', 'D/M/YYYY', 'YYYY-MM-DD']),
      name: z.enum(['local', 'friendly', 'us', 'european', 'iso']),
    }),
    timeFormat: z.object({
      format: z.enum(['h:mma', 'HH:mm']),
      name: z.enum(['12hour', '24hour']),
    }),
  }),
})
export type DateTimeField = z.infer<typeof dateTimeFieldSchema>
