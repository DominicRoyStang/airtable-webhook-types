import { z } from 'zod'

import * as aiText from './aiText.js'
export * from './aiText.js'

import * as multipleAttachments from './multipleAttachments.js'
export * from './multipleAttachments.js'

import * as autoNumber from './autoNumber.js'
export * from './autoNumber.js'

import * as barcode from './barcode.js'
export * from './barcode.js'

import * as button from './button.js'
export * from './button.js'

import * as checkbox from './checkbox.js'
export * from './checkbox.js'

import * as singleCollaborator from './singleCollaborator.js'
export * from './singleCollaborator.js'

import * as count from './count.js'
export * from './count.js'

import * as createdBy from './createdBy.js'
export * from './createdBy.js'

import * as createdTime from './createdTime.js'
export * from './createdTime.js'

import * as currency from './currency.js'
export * from './currency.js'

import * as date from './date.js'
export * from './date.js'

import * as dateTime from './dateTime.js'
export * from './dateTime.js'

import * as duration from './duration.js'
export * from './duration.js'

import * as email from './email.js'
export * from './email.js'

import * as formula from './formula.js'
export * from './formula.js'

import * as lastModifiedBy from './lastModifiedBy.js'
export * from './lastModifiedBy.js'

import * as lastModifiedTime from './lastModifiedTime.js'
export * from './lastModifiedTime.js'

import * as multilineText from './multilineText.js'
export * from './multilineText.js'

import * as multipleLookupValues from './multipleLookupValues.js'
export * from './multipleLookupValues.js'

import * as multipleCollaborators from './multipleCollaborators.js'
export * from './multipleCollaborators.js'

import * as multipleRecordLinks from './multipleRecordLinks.js'
export * from './multipleRecordLinks.js'

import * as multipleSelects from './multipleSelects.js'
export * from './multipleSelects.js'

import * as number from './number.js'
export * from './number.js'

import * as percent from './percent.js'
export * from './percent.js'

import * as phoneNumber from './phoneNumber.js'
export * from './phoneNumber.js'

import * as rating from './rating.js'
export * from './rating.js'

import * as richText from './richText.js'
export * from './richText.js'

import * as rollup from './rollup.js'
export * from './rollup.js'

import * as singleLineText from './singleLineText.js'
export * from './singleLineText.js'

import * as singleSelect from './singleSelect.js'
export * from './singleSelect.js'

import * as externalSyncSource from './externalSyncSource.js'
export * from './externalSyncSource.js'

import * as url from './url.js'
export * from './url.js'

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

export const cellsSchema = z.union([
  aiText.aiTextCellSchema,
  multipleAttachments.multipleAttachmentsCellSchema,
  autoNumber.autoNumberCellSchema,
  barcode.barcodeCellSchema,
  button.buttonCellSchema,
  checkbox.checkboxCellSchema,
  singleCollaborator.singleCollaboratorCellSchema,
  count.countCellSchema,
  createdBy.createdByCellSchema,
  createdTime.createdTimeCellSchema,
  currency.currencyCellSchema,
  date.dateCellSchema,
  dateTime.dateTimeCellSchema,
  duration.durationCellSchema,
  email.emailCellSchema,
  formula.formulaCellSchema,
  lastModifiedBy.lastModifiedByCellSchema,
  lastModifiedTime.lastModifiedTimeCellSchema,
  multilineText.multilineTextCellSchema,
  multipleLookupValues.multipleLookupValuesCellSchema,
  multipleCollaborators.multipleCollaboratorsCellSchema,
  multipleRecordLinks.multipleRecordLinksCellSchema,
  multipleSelects.multipleSelectsCellSchema,
  number.numberCellSchema,
  percent.percentCellSchema,
  phoneNumber.phoneNumberCellSchema,
  rating.ratingCellSchema,
  richText.richTextCellSchema,
  rollup.rollupCellSchema,
  singleLineText.singleLineTextCellSchema,
  singleSelect.singleSelectCellSchema,
  externalSyncSource.externalSyncSourceCellSchema,
  url.urlCellSchema,
])
export type CellsSchema = z.infer<typeof cellsSchema>

export const fieldsSchema = z.union([
  aiText.aiTextFieldSchema,
  multipleAttachments.multipleAttachmentsFieldSchema,
  autoNumber.autoNumberFieldSchema,
  barcode.barcodeFieldSchema,
  button.buttonFieldSchema,
  checkbox.checkboxFieldSchema,
  singleCollaborator.singleCollaboratorFieldSchema,
  count.countFieldSchema,
  createdBy.createdByFieldSchema,
  createdTime.createdTimeFieldSchema,
  currency.currencyFieldSchema,
  date.dateFieldSchema,
  dateTime.dateTimeFieldSchema,
  duration.durationFieldSchema,
  email.emailFieldSchema,
  formula.formulaFieldSchema,
  lastModifiedBy.lastModifiedByFieldSchema,
  lastModifiedTime.lastModifiedTimeFieldSchema,
  multilineText.multilineTextFieldSchema,
  multipleLookupValues.multipleLookupValuesFieldSchema,
  multipleCollaborators.multipleCollaboratorsFieldSchema,
  multipleRecordLinks.multipleRecordLinksFieldSchema,
  multipleSelects.multipleSelectsFieldSchema,
  number.numberFieldSchema,
  percent.percentFieldSchema,
  phoneNumber.phoneNumberFieldSchema,
  rating.ratingFieldSchema,
  richText.richTextFieldSchema,
  rollup.rollupFieldSchema,
  singleLineText.singleLineTextFieldSchema,
  singleSelect.singleSelectFieldSchema,
  externalSyncSource.externalSyncSourceFieldSchema,
  url.urlFieldSchema,
])
export type FieldsSchema = z.infer<typeof fieldsSchema>
