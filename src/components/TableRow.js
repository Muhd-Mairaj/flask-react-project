import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { InputField } from './InputField';

function TableRow({ editing, key, style, item, expiry, onRemove, onEdit }) {
  useEffect(() => {
    (async () => {
      const response = await api.get("/profile", null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      })

      if (response.ok) {
        setItems(response.body.items)
      }
      else {
        console.log("error: ", response.body)
      }
      // const current = new Date();
      // const date = current.getFullYear() + "-" + String(current.getMonth()+1).padStart(2, "0") + "-" + String(current.getDate()).padStart(2, "0")
    })()

  }, [api])

  return (
    // {editing ? <InputField
    //       name="item"
    //       placeholder="Item name"
    //       fieldRef={itemField}
    //       error={formErrors.item}
    //     /> }

    <tr key={key} style={style}>
      <td>{item}</td>
      <td>{expiry}</td>
      <td>
        <Button variant="dark" className="w-5" onClick={onRemove}>Remove</Button>
        <Button variant="dark" className="w-5 px-4 ms-2" onClick={onEdit}>Edit</Button>
      </td>
    </tr>
  )
}

export default TableRow;