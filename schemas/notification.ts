import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-notification
const webhookSuccessNotificationSchema = z.object({
  success: z.literal(true),
  completionTimestamp: z.string(),
  durationMs: z.number(),
  retryNumber: z.number(),
})

const webhookErrorNotificationSchema = z.object({
  success: z.literal(false),
  error: z.object({ message: z.string() }),
  completionTimestamp: z.string(),
  durationMs: z.number(),
  retryNumber: z.number(),
  willBeRetried: z.boolean(),
})

export const webhookNotificationSchema = z.discriminatedUnion('success', [
  webhookSuccessNotificationSchema,
  webhookErrorNotificationSchema,
])
export type WebhookNotification = z.infer<typeof webhookNotificationSchema>
