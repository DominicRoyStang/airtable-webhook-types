import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#lookup
export const multipleLookupValuesCellSchema = z.object({
  valuesByLinkedRecordId: z.record(z.any().array()),
  linkedRecordIds: z.string().array(),
}).nullable()
export type MultipleLookupValuesCell = z.infer<typeof multipleLookupValuesCellSchema>

export const multipleLookupValuesFieldSchema = z.object({
  type: z.literal('multipleLookupValues'),
  options: z.object({
    fieldIdInLinkedTable: z.string().nullable(),
    isValid: z.boolean(),
    recordLinkFieldId: z.string().nullable(),
    result: z.object({}).nullable(), // This type is incomplete. See documentation.
  }),
})
export type MultipleLookupValuesField = z.infer<typeof multipleLookupValuesFieldSchema>
