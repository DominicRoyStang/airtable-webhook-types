import { z } from 'zod'
import { cellsSchema } from './fields/index.js'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-changed-record
export const webhookRecordChangedSchema = z.object({
  current: z.object({
    cellValuesByFieldId: z.record(cellsSchema.nullable()),
  }),
  previous: z.object({
    cellValuesByFieldId: z.record(cellsSchema.nullable()),
  }).optional(),
  unchanged: z.object({
    cellValuesByFieldId: z.record(cellsSchema.nullable()),
  }).optional(),
})
export type WebhookRecordChanged = z.infer<typeof webhookRecordChangedSchema>
