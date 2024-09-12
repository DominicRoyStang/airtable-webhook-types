import { z } from 'zod'
import { colorSchema } from './colors.js'

// As per documentation: https://airtable.com/developers/web/api/field-model#syncsource
export const externalSyncSourceCellSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().optional(),
})
export type ExternalSyncSourceCell = z.infer<typeof externalSyncSourceCellSchema>

export const externalSyncSourceFieldSchema = z.object({
  type: z.literal('externalSyncSource'),
  options: z.object({
    choices: z.object({
      id: z.string(),
      color: colorSchema.optional(),
      name: z.string(),
    }).array(),
  }),
})
export type ExternalSyncSourceField = z.infer<typeof externalSyncSourceFieldSchema>
