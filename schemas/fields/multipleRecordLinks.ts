import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#foreignkey
export const multipleRecordLinksCellSchema = z.object({
  id: z.string(),
  name: z.string(),
}).array().nullable()
export type MultipleRecordLinksCell = z.infer<typeof multipleRecordLinksCellSchema>

export const multipleRecordLinksFieldSchema = z.object({
  type: z.literal('multipleRecordLinks'),
  options: z.object({
    isReversed: z.boolean(),
    linkedTableId: z.string(),
    prefersSingleRecordLink: z.boolean(),
    inverseLinkFieldId: z.string().optional(),
    viewIdForRecordSelection: z.string().optional(),
  }),
})
export type MultipleRecordLinksField = z.infer<typeof multipleRecordLinksFieldSchema>
