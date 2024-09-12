import { z } from 'zod'
import { cellsSchema } from './fields/index.js'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-created-record
export const webhookRecordCreatedSchema = z.object({
  timestamp: z.string().datetime(),
  cellValuesByFieldId: z.record(cellsSchema),
})
export type WebhookRecordCreated = z.infer<typeof webhookRecordCreatedSchema>
