import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#rollup
export const rollupCellSchema = z.any()
export type RollupCell = z.infer<typeof rollupCellSchema>

export const rollupFieldSchema = z.object({
  type: z.literal('rollup'),
  options: z.object({
    fieldIdInLinkedTable: z.string().optional(),
    recordLinkFieldId: z.string().optional(),
    result: z.object({}).nullable().optional(), // TODO: This type is incomplete. See documentation.
    isValid: z.boolean().optional(),
    referencedFieldIds: z.string().array().optional(),
  }),
})
export type RollupField = z.infer<typeof rollupFieldSchema>
