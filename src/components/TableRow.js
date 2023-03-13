import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { InputField } from './InputField';


function TableRow({ editing, key, style, item, expiry, onRemove, onEdit }) {
  useEffect(() => {
    console.log("editing", editing)
  }, [editing])

  return (
    {items ? <Table striped bordered responsive="lg" className="Home">
          <thead>
            <tr>
              <th>Item</th>
              <th>Expiry</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, _) => (
              <TableRow
                key={item.item_id}
                style={{"backgroundColor": `${item.bg === "red" ? "#ff0000a0": ""}`}}
                item={item.item}
                expiry={item.expiry}
                onRemove={() => {removeItem(item.item_id)}}
                onEdit={() => {editItem(item.item_id)}}
                editing={isEditing}
              />
              // <tr key={item.item_id} style={{"backgroundColor": `${item.bg === "red" ? "#ff0000a0": ""}`}}>
              //   <td>{item.item}</td>
              //   <td>{item.expiry}</td>
              //   <td>
              //     <Button variant="dark" className="w-5" onClick={() => {removeItem(item.item_id)}}>Remove</Button>
              //     <Button variant="dark" className="w-5 px-4 ms-2" onClick={() => {editItem(item.item_id)}}>Edit</Button>
              //   </td>
              // </tr>
            ))}
          </tbody>
        </Table>
      :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }

    {editing ? <InputField
          name="item"
          placeholder="Item name"
          fieldRef={itemField}
          error={formErrors.item}
        />
    :
        <tr key={key} style={style}>
          <td>{item}</td>
          <td>{expiry}</td>
          <td>
            <Button variant="dark" className="w-5" onClick={onRemove}>Remove</Button>
            <Button variant="dark" className="w-5 px-4 ms-2" onClick={onEdit}>Edit</Button>
          </td>
        </tr>
    }
  )
}

export default TableRow;