import { z } from 'zod'
import { webhookUserSchema } from './user.js'

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
