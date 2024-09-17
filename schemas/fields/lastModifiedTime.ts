import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#lastmodifiedtime
export const lastModifiedTimeCellSchema = z.string().nullable()
export type LastModifiedTimeCell = z.infer<typeof lastModifiedTimeCellSchema>

export const lastModifiedTimeFieldSchema = z.object({
  type: z.literal('lastModifiedTime'),
  options: z.object({
    isValid: z.boolean(),
    referencedFieldIds: z.union([z.string().array(), z.null()]),
    result: z.object({}).nullable(), // This type is incomplete. See documentation.
  }),
})
export type LastModifiedTimeField = z.infer<typeof lastModifiedTimeFieldSchema>
