import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#count
export const countCellSchema = z.number()
export type CountCell = z.infer<typeof countCellSchema>

export const countFieldSchema = z.object({
  type: z.literal('count'),
  options: z.object({
    isvalie: z.discriminatedUnion('isValid', [
      z.object({
        isValid: z.literal(true),
        recordLinkFieldId: z.string().optional(),
      }),
      z.object({
        isValid: z.literal(false),
        recordLinkFieldId: z.null().optional(),
      }),
    ]),
  }),
})
export type CountField = z.infer<typeof countFieldSchema>
