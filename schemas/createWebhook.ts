import { z } from 'zod'
import { webhookSpecificationSchema } from './specification.js'

// As per documentation: https://airtable.com/developers/web/api/create-a-webhook
export const createWebhookPathParamsSchema = z.object({ baseId: z.string() })
export type CreateWebhookPathParams = z.infer<typeof createWebhookPathParamsSchema>

export const createWebhookRequestBodySchema = z.object({
  notificationUrl: z.string().url().optional(),
  specification: z.object({ options: webhookSpecificationSchema }),
})
export type CreateWebhookRequestBody = z.infer<typeof createWebhookRequestBodySchema>

export const createWebhookResponseSchema = z.object({
  id: z.string(),
  macSecretBase64: z.string(),
  expirationTime: z.string().optional(),
})
export type CreateWebhookResponse = z.infer<typeof createWebhookResponseSchema>
