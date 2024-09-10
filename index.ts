import { z } from 'zod'
import { fieldTypeSchema } from './fields.js'

export const webhookNotificationSchema = z.object({
  base: z.object({ id: z.string() }),
  webhook: z.object({ id: z.string() }),
  timestamp: z.string().datetime(),
})
export type WebhookNotification = z.infer<typeof webhookNotificationSchema>

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-user
export const webhookUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  permissionLevel: z.enum(['none', 'read', 'comment', 'edit', 'create']),
  name: z.string().optional(),
  profilePicUrl: z.string().url().optional(),
})
export type WebhookUser = z.infer<typeof webhookUserSchema>

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-action
export const webhookActionSchema = z.discriminatedUnion('source', [
  z.object({
    source: z.enum(['client', 'publicApi']),
    sourceMetadata: z.object({
      user: webhookUserSchema,
    }),
  }),
  z.object({
    source: z.literal('formSubmission'),
    sourceMetadata: z.object({ viewId: z.string() }),
  }),
  z.object({
    source: z.literal('formPageSubmission'),
    sourceMetadata: z.object({ pageId: z.string() }),
  }),
  z.object({
    source: z.literal('automation'),
    sourceMetadata: z.object({ automationId: z.string() }),
  }),
  z.object({
    source: z.enum(['system', 'sync', 'anonymousUser']),
  }),
])
export type WebhookAction = z.infer<typeof webhookActionSchema>

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-table-changed
export const webhookTableChangedSchema = z.object({}) // TODO
export type WebhookTableChanged = z.infer<typeof webhookTableChangedSchema>

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-table-created
export const webhookTableCreatedSchema = z.object({
  fieldsById: z.record(z.object({
    type: fieldTypeSchema,
    name: z.string(),
  })),
  recordsById: z.record(z.object({
    createdTime: z.string().datetime(),
    cellValuesByFieldId: z.object({}), // TODO
  })),
  metadata: z.object({
    name: z.string(),
    description: z.string().nullable(),
  }),
})
export type WebhookTableCreated = z.infer<typeof webhookTableCreatedSchema>

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-payload
export const webhookPayloadSchema = z.object({
  actionMetadata: webhookActionSchema,
  baseTransactionNumber: z.number(),
  payloadFormat: z.literal('v0'),
  timestamp: z.string(),
  changedTablesById: z.record(webhookTableChangedSchema).optional(),
  createdTablesById: z.record(webhookTableCreatedSchema).optional(),
  destroyedTableIds: z.string().array(),
})
export type WebhookPayload = z.infer<typeof webhookPayloadSchema>

export const webhookErrorPayloadSchema = webhookPayloadSchema.extend({
  error: z.literal(true),
  code: z.enum(['INVALID_FILTERS', 'INVALID_HOOK', 'INTERNAL_ERROR']),
})
export type WebhookErrorPayload = z.infer<typeof webhookErrorPayloadSchema>

export const listWebhookPayloadsResponseSchema = z.object({
  payloads: webhookPayloadSchema.array(),
  cursor: z.number(),
  mightHaveMore: z.boolean(),
})
export type ListWebhookPayloadsResponse = z.infer<typeof listWebhookPayloadsResponseSchema>
