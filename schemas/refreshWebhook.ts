import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/refresh-a-webhook
export const refreshWebhookPathParamsSchema = z.object({
  baseId: z.string(),
  webhookId: z.string(),
})
export type RefreshWebhookPathParams = z.infer<typeof refreshWebhookPathParamsSchema>

export const refreshWebhookResponseSchema = z.object({
  expirationTime: z.string().nullable(),
})
export type RefreshWebhookResponse = z.infer<typeof refreshWebhookResponseSchema>
