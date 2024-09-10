import { z } from 'zod'
import { webhookRecordChangedSchema } from './recordChanged.js'
import { webhookRecordCreatedSchema } from './recordCreated.js'
import { fieldTypeSchema } from './fields.js'

// As per documentation: https://airtable.com/developers/web/api/model/webhooks-table-changed
export const webhookTableChangedSchema = z.object({
  changedViewsById: z.record(z.object({
    changedRecordsById: z.record(webhookRecordChangedSchema).optional(),
    createdRecordsById: z.record(webhookRecordCreatedSchema).optional(),
    destroyedRecordIds: z.string().array().optional(),
  })).optional(),
  changedFieldsById: z.record(z.object({
    current: z.object({
      type: fieldTypeSchema.optional(),
      name: z.string().optional(),
    }),
    previous: z.object({
      type: fieldTypeSchema.optional(),
      name: z.string().optional(),
    }).optional(),
  })).optional(),
  changedRecordsById: z.record(webhookRecordChangedSchema).optional(),
  createdFieldsById: z.record(z.object({
    type: fieldTypeSchema,
    name: z.string(),
  })).optional(),
  createdRecordsById: z.record(webhookRecordCreatedSchema).optional(),
  changedMetadata: z.object({
    current: z.object({
      name: z.string().optional(),
      description: z.string().nullable().optional(),
    }),
    previous: z.object({
      name: z.string().optional(),
      description: z.string().nullable().optional(),
    }),
  }).optional(),
  destroyedFieldIds: z.string().array().optional(),
  destroyedRecordIds: z.string().array().optional(),
})
export type WebhookTableChanged = z.infer<typeof webhookTableChangedSchema>
