import { z } from 'zod'
import { colorSchema } from './colors.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#multiselect
export const multipleSelectsCellSchema = z.object({
  id: z.string(),
  color: colorSchema.optional(),
  name: z.string(),
}).array()
export type MultipleSelectsCell = z.infer<typeof multipleSelectsCellSchema>

export const multipleSelectsFieldSchema = z.object({
  type: z.literal('multipleSelects'),
  options: z.object({
    choices: z.object({
      id: z.string(),
      color: colorSchema.optional(),
      name: z.string(),
    }).array(),
  }),
})
export type MultipleSelectsField = z.infer<typeof multipleSelectsFieldSchema>
