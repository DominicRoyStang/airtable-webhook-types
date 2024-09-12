import { z } from 'zod'
import { cellsSchema, fieldTypeSchema } from './fields/index.js'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-table-created
export const webhookTableCreatedSchema = z.object({
  fieldsById: z.record(z.object({
    type: fieldTypeSchema,
    name: z.string(),
  })),
  recordsById: z.record(z.object({
    createdTime: z.string().datetime(),
    cellValuesByFieldId: z.record(cellsSchema),
  })),
  metadata: z.object({
    name: z.string(),
    description: z.string().nullable(),
  }),
})
export type WebhookTableCreated = z.infer<typeof webhookTableCreatedSchema>
