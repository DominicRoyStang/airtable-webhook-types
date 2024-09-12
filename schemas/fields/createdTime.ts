import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#createdby
export const createdTimeCellSchema = z.string()
export type CreatedTimeCell = z.infer<typeof createdTimeCellSchema>

export const createdTimeFieldSchema = z.object({
  type: z.literal('createdTime'),
  options: z.object({
    result: z.object({}).optional(), // This type is incomplete. See documentation.
  }),
})
export type CreatedTimeField = z.infer<typeof createdTimeFieldSchema>
