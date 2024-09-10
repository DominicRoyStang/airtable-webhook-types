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
