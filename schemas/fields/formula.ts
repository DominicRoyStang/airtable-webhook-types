import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#formula
export const formulaCellSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number()])),
  z.undefined(),
])
export type FormulaCell = z.infer<typeof formulaCellSchema>

export const formulaFieldSchema = z.object({
  type: z.literal('formula'),
  options: z.object({
    formula: z.string(),
    isValid: z.boolean(),
    referencedFieldIds: z.string().nullable(),
    result: z.object({}).nullable(), // This type is incomplete. See documentation.
  }),
})
export type FormulaField = z.infer<typeof formulaFieldSchema>
