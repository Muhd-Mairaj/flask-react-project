import { InputField } from './InputField';

function Row({ editing, key, style, item, expiry, onRemove, onEdit }) {
  return (
    // {editing ? <InputField
    //       name="item"
    //       placeholder="Item name"
    //       fieldRef={itemField}
    //       error={formErrors.item}
    //     /> }

    <tr key={key} style={style}>
      <td>{Item}</td>
      <td>{item.expiry}</td>
      <td>
        <Button variant="dark" className="w-5" onClick={() => {removeItem(item.item_id)}}>Remove</Button>
        <Button variant="dark" className="w-5 px-4 ms-2" onClick={() => {editItem(item.item_id)}}>Edit</Button>
      </td>
    </tr>
  )
}

export default Row;