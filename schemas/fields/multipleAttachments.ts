import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/field-model#multipleattachment
const thumbnailSchema = z.object({
  url: z.string().url(),
  height: z.number(),
  width: z.number(),
})
export const multipleAttachmentsCellSchema = z.object({
  id: z.string(),
  type: z.string(),
  filename: z.string(),
  height: z.number(),
  size: z.number(),
  url: z.string().url(),
  width: z.number(),
  thumbnails: z.object({
    full: thumbnailSchema.optional(),
    large: thumbnailSchema.optional(),
    small: thumbnailSchema.optional(),
  }),
}).array()
export type MultipleAttachmentsCell = z.infer<typeof multipleAttachmentsCellSchema>

export const multipleAttachmentsFieldSchema = z.object({
  type: z.literal('multipleAttachments'),
  options: z.object({ isReversed: z.boolean() }),
})
export type MultipleAttachmentsField = z.infer<typeof multipleAttachmentsFieldSchema>
