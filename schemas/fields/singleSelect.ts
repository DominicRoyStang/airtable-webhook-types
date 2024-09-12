import { z } from 'zod'
import { colorSchema } from './colors.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#select
export const singleSelectCellSchema = z.object({
  id: z.string(),
  color: colorSchema.optional(),
  name: z.string(),
})
export type SingleSelectCell = z.infer<typeof singleSelectCellSchema>

export const singleSelectFieldSchema = z.object({
  type: z.literal('singleSelect'),
  options: z.object({
    choices: z.object({
      id: z.string(),
      color: colorSchema.optional(),
      name: z.string(),
    }).array(),
  }),
})
export type SingleSelectField = z.infer<typeof singleSelectFieldSchema>
