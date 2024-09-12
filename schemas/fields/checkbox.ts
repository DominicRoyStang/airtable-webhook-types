import { z } from 'zod'
import { brightColorSchema } from './colors.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#checkbox
export const checkboxCellSchema = z.boolean().optional()
export type CheckboxCell = z.infer<typeof checkboxCellSchema>

export const checkboxFieldSchema = z.object({
  type: z.literal('checkbox'),
  options: z.object({
    color: brightColorSchema,
    icon: z.enum(['check', 'xCheckbox', 'start', 'heart', 'thumbsUp', 'flag', 'dot']),
  }),
})
export type CheckboxField = z.infer<typeof checkboxFieldSchema>
