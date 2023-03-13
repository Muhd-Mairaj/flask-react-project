import { InputField } from './InputField';

function Row({ editing, key, style, item, expiry, onRemove, onEdit }) {
  return (
    {editing ? <InputField
          name="item"
          placeholder="Item name"
          fieldRef={itemField}
          error={formErrors.item}
        /> }
  )
}

export default Row;