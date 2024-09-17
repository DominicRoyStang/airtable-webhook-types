import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#aitext
export const aiTextCellSchema = z.discriminatedUnion('state', [
  z.object({
    state: z.enum(['empty', 'loading', 'generated']),
    isStale: z.boolean(),
    value: z.string().nullable(),
  }),
  z.object({
    state: z.literal('error'),
    errorType: z.string(),
    isStale: z.boolean(),
    value: z.string().nullable(),
  }),
]).nullable()
export type AiTextCell = z.infer<typeof aiTextCellSchema>

export const aiTextFieldSchema = z.object({
  type: z.literal('aiText'),
  options: z.object({
    prompt: z.union([
      z.string(),
      z.object({
        field: z.object({ fieldId: z.string() }),
      }),
    ]).array().optional(),
    referenceFieldIds: z.string().array(),
  }),
})
export type AiTextField = z.infer<typeof aiTextFieldSchema>
