import { z } from 'zod'
import { webhookActionSchema } from './action.js'
import { webhookTableChangedSchema } from './tableChanged.js'
import { webhookTableCreatedSchema } from './tableCreated.js'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-payload
const webhookSuccessPayloadSchema = z.object({
  actionMetadata: webhookActionSchema,
  baseTransactionNumber: z.number(),
  payloadFormat: z.literal('v0'),
  timestamp: z.string(),
  changedTablesById: z.record(webhookTableChangedSchema).optional(),
  createdTablesById: z.record(webhookTableCreatedSchema).optional(),
  destroyedTableIds: z.string().array(),
  error: z.never().optional(),
})

const webhookErrorPayloadSchema = webhookSuccessPayloadSchema.extend({
  error: z.literal(true),
  code: z.enum(['INVALID_FILTERS', 'INVALID_HOOK', 'INTERNAL_ERROR']),
})

export const webhookPayloadSchema = z.discriminatedUnion('error', [
  webhookSuccessPayloadSchema,
  webhookErrorPayloadSchema,
])
export type WebhookPayload = z.infer<typeof webhookPayloadSchema>
