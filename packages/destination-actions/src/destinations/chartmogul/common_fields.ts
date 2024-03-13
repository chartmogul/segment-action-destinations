import { InputField } from '@segment/actions-core/destination-kit/types'

export const message_id: InputField = {
  label: 'MessageId',
  description: 'The Segment message id. This field is required',
  type: 'string',
  required: true,
  default: { '@path': '$.messageId' }
}

export const timestamp: InputField = {
  label: 'Event Timestamp',
  description: 'The timestamp at which the event was created. This field is required',
  type: 'datetime',
  required: true,
  default: { '@path': '$.timestamp' }
}

export const sent_at: InputField = {
  label: 'Sent At',
  description: 'When the event was sent',
  type: 'datetime',
  required: true,
  default: { '@path': '$.sentAt' }
}

export const event_type = (default_value: string): InputField => {
  return {
    label: 'Event Type',
    description: 'The type of event. This field is required',
    type: 'string',
    default: default_value,
    required: true,
    unsafe_hidden: true
  }
}

export const user_id = (required_value: boolean): InputField => {
  return {
    label: 'User Id',
    description: 'Segment User Id',
    type: 'string',
    readOnly: true,
    required: required_value,
    default: { '@path': '$.userId' }
  }
}

export const anonymous_id = (required_value: boolean): InputField => {
  return {
    label: 'Anonymous Id',
    description: 'Segment Anonymous Id',
    type: 'string',
    readOnly: true,
    required: required_value,
    default: { '@path': '$.anonymousId' }
  }
}
