import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/webhooks-overview#webhook-notification-delivery
export const webhookNotificationDeliverySchema = z.object({
  base: z.object({ id: z.string() }),
  webhook: z.object({ id: z.string() }),
  timestamp: z.string().datetime(),
})
export type WebhookNotificationDelivery = z.infer<typeof webhookNotificationDeliverySchema>
