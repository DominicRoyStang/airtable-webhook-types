import { z } from 'zod'

// As per documentation: https://airtable.com/developers/web/api/model/field-type
export const fieldTypeSchema = z.enum([
  'singleLineText',
  'email',
  'url',
  'multilineText',
  'number',
  'percent',
  'currency',
  'singleSelect',
  'multipleSelects',
  'singleCollaborator',
  'multipleCollaborators',
  'multipleRecordLinks',
  'date',
  'dateTime',
  'phoneNumber',
  'multipleAttachments',
  'checkbox',
  'formula',
  'createdTime',
  'rollup',
  'count',
  'lookup',
  'multipleLookupValues',
  'autoNumber',
  'barcode',
  'rating',
  'richText',
  'duration',
  'lastModifiedTime',
  'button',
  'createdBy',
  'lastModifiedBy',
  'externalSyncSource',
  'aiText',
])
export type FieldType = z.infer<typeof fieldTypeSchema>

// As per documentation: https://airtable.com/developers/web/api/field-model
export const aiTextCellSchema = z.discriminatedUnion('state', [
  z.object({
    state: z.enum(['empty', 'loading', 'generated']),
    isStale: z.boolean(),
    value: z.string().nullable(),
  }),
  z.object({
    state: z.literal('error'),
    errorType: z.string(),
    isStale: z.boolean(),
    value: z.string().nullable(),
  }),
])
export type AiTextCell = z.infer<typeof aiTextCellSchema>

const thumbnailSchema = z.object({
  url: z.string().url(),
  height: z.number(),
  width: z.number(),
})
export const attachmentCellSchema = z.object({
  id: z.string(),
  type: z.string(),
  filename: z.string(),
  height: z.number(),
  size: z.number(),
  url: z.string().url(),
  width: z.number(),
  thumbnails: z.object({
    full: thumbnailSchema.optional(),
    large: thumbnailSchema.optional(),
    small: thumbnailSchema.optional(),
  }),
}).array()
export type AttachmentCell = z.infer<typeof attachmentCellSchema>

export const autoNumberCellSchema = z.number()
export type AutoNumberCell = z.infer<typeof autoNumberCellSchema>

export const barcodeCellSchema = z.object({
  type: z.string().nullable().optional(),
  text: z.string(),
})
export type BarcodeCell = z.infer<typeof barcodeCellSchema>

export const buttonCellSchema = z.object({
  label: z.string(),
  url: z.string().url().nullable(),
})
export type ButtonCell = z.infer<typeof buttonCellSchema>

export const checkboxCellSchema = z.boolean().optional()
export type CheckboxCell = z.infer<typeof checkboxCellSchema>

export const collaboratorCellSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  permissionLevel: z.enum(['none', 'read', 'comment', 'edit', 'create']).optional(),
  profilePicUrl: z.string().url().optional(),
})
export type CollaboratorCell = z.infer<typeof collaboratorCellSchema>

export const countCellSchema = z.number()
export type CountCell = z.infer<typeof countCellSchema>

export const createdByCellSchema = collaboratorCellSchema
export type CreatedByCell = z.infer<typeof createdByCellSchema>

export const createdTimeCellSchema = z.string()
export type CreatedTimeCell = z.infer<typeof createdTimeCellSchema>

export const currencyCellSchema = z.number()
export type CurrencyCell = z.infer<typeof currencyCellSchema>

export const dateCellSchema = z.string()
export type DateCell = z.infer<typeof dateCellSchema>

export const dateTimeCellSchema = z.string().datetime()
export type DateTimeCell = z.infer<typeof dateTimeCellSchema>

export const durationCellSchema = z.number()
export type DurationCell = z.infer<typeof durationCellSchema>

export const emailCellSchema = z.string().email()
export type EmailCell = z.infer<typeof emailCellSchema>

export const formulaCellSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number()])),
  z.undefined(),
])
export type FormulaCell = z.infer<typeof formulaCellSchema>

export const lastModifiedByCellSchema = collaboratorCellSchema
export type LastModifiedByCell = z.infer<typeof lastModifiedByCellSchema>

export const lastModifiedTimeCellSchema = z.string()
export type LastModifiedTimeCell = z.infer<typeof lastModifiedTimeCellSchema>

export const linkToAnotherRecordCellSchema = z.object({
  id: z.string(),
  name: z.string(),
}).array()
export type LinkToAnotherRecordCell = z.infer<typeof linkToAnotherRecordCellSchema>

export const longTextCellSchema = z.string()
export type LongTextCell = z.infer<typeof longTextCellSchema>

export const lookupCellSchema = z.object({
  valuesByLinkedRecordId: z.record(z.any().array()),
  linkedRecordIds: z.string().array(),
})
export type LookupCell = z.infer<typeof lookupCellSchema>

export const multipleCollaboratorsCellSchema = collaboratorCellSchema.array()
export type MultipleCollaboratorsCell = z.infer<typeof multipleCollaboratorsCellSchema>

const colorSchema = z.enum([
  'blueLight2',
  'cyanLight2',
  'tealLight2',
  'greenLight2',
  'yellowLight2',
  'orangeLight2',
  'redLight2',
  'pinkLight2',
  'purpleLight2',
  'grayLight2',
  'blueLight1',
  'cyanLight1',
  'tealLight1',
  'greenLight1',
  'yellowLight1',
  'orangeLight1',
  'redLight1',
  'pinkLight1',
  'purpleLight1',
  'grayLight1',
  'blueBright',
  'cyanBright',
  'tealBright',
  'greenBright',
  'yellowBright',
  'orangeBright',
  'redBright',
  'pinkBright',
  'purpleBright',
  'grayBright',
  'blueDark1',
  'cyanDark1',
  'tealDark1',
  'greenDark1',
  'yellowDark1',
  'orangeDark1',
  'redDark1',
  'pinkDark1',
  'purpleDark1',
  'grayDark1',
])
export const multipleSelectsCellSchema = z.object({
  id: z.string(),
  color: colorSchema.optional(),
  name: z.string(),
}).array()
export type MultipleSelectsCell = z.infer<typeof multipleSelectsCellSchema>

export const numberCellSchema = z.number()
export type NumberCell = z.infer<typeof numberCellSchema>

export const percentCellSchema = z.number()
export type PercentCell = z.infer<typeof percentCellSchema>

export const phoneNumberCellSchema = z.string()
export type PhoneNumberCell = z.infer<typeof phoneNumberCellSchema>

export const ratingCellSchema = z.number()
export type RatingCell = z.infer<typeof ratingCellSchema>

export const richTextCellSchema = z.string()
export type RichTextCell = z.infer<typeof richTextCellSchema>

export const rollupCellSchema = z.any()
export type RollupCell = z.infer<typeof rollupCellSchema>

export const singleLineTextCellSchema = z.string()
export type SingleLineTextCell = z.infer<typeof singleLineTextCellSchema>

export const singleSelectCellSchema = z.object({
  id: z.string(),
  color: colorSchema.optional(),
  name: z.string(),
})
export type SingleSelectCell = z.infer<typeof singleSelectCellSchema>

export const syncSourceCellSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().optional(),
})
export type SyncSourceCell = z.infer<typeof syncSourceCellSchema>

export const urlCellSchema = z.string().url()
export type UrlCell = z.infer<typeof urlCellSchema>
