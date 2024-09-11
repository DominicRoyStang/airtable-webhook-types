import { z } from 'zod'
import { webhookNotificationSchema } from './notification.js'
import { webhookSpecificationSchema } from './specification.js'

// As per documentation: https://airtable.com/developers/web/api/list-webhooks
export const listWebhooksPathParamsSchema = z.object({ baseId: z.string() })
export type ListWebhooksPathParams = z.infer<typeof listWebhooksPathParamsSchema>

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
