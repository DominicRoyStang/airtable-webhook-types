import { z } from 'zod'
import { webhookPayloadSchema } from './payload.js'
import { webhookNotificationSchema } from './notification.js'
import { webhookSpecificationSchema } from './specification.js'

// As per documentation: https://airtable.com/developers/web/api/list-webhook-payloads
export const listWebhookPayloadsResponseSchema = z.object({
  payloads: webhookPayloadSchema.array(),
  cursor: z.number(),
  mightHaveMore: z.boolean(),
})
export type ListWebhookPayloadsResponse = z.infer<typeof listWebhookPayloadsResponseSchema>

// As per documentation: https://airtable.com/developers/web/api/list-webhooks
export const listWebhooksResponseSchema = z.object({
  id: z.string(),
  areNotificationsEnabled: z.boolean(),
  cursorForNextPayload: z.number(),
  isHookEnabled: z.boolean(),
  lastSuccessfulNotificationTime: z.string().nullable(),
  notificationUrl: z.string().nullable(),
  expirationTime: z.string().optional(),
  lastNotificationResult: webhookNotificationSchema.nullable(),
  specification: z.object({
    options: webhookSpecificationSchema,
  }),
}).array()
export type ListWebhooksResponse = z.infer<typeof listWebhooksResponseSchema>

// As per documentation: https://airtable.com/developers/web/api/create-a-webhook
export const createWebhookResponseSchema = z.object({
  id: z.string(),
  macSecretBase64: z.string(),
  expirationTime: z.string().optional(),
})
export type CreateWebhookResponse = z.infer<typeof createWebhookResponseSchema>

// As per documentation: https://airtable.com/developers/web/api/refresh-a-webhook
export const refreshWebhookResponseSchema = z.object({
  expirationTime: z.string().nullable(),
})
export type RefreshWebhookResponse = z.infer<typeof refreshWebhookResponseSchema>
