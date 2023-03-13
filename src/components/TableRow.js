import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';


function TableRow({ editing, key, style, item, expiry, onRemove, onEdit }) {
  useEffect(() => {
    console.log("editing", editing)
    console.log("key", key)
  }, [editing, key])

  return (
    <>
      {key && 
          <tr key={key}>
            <td>
              <InputField
                name="item"
                placeholder="Item name"
              />
            </td>
            <td>
              <InputField
                name="expiry"
                placeholder="expiry"
              />
            </td>
            <td>
              <Button variant="dark" className="w-5" onClick={onRemove}>Remove</Button>
              <Button variant="dark" className="w-5 px-4 ms-2" onClick={onEdit}>Edit</Button>
            </td>
          </tr>
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
      {/* <tr key={key} style={style}>
        <td>{item}</td>
        <td>{expiry}</td>
        <td>
          <Button variant="dark" className="w-5" onClick={onRemove}>Remove</Button>
          <Button variant="dark" className="w-5 px-4 ms-2" onClick={onEdit}>Edit</Button>
        </td>
      </tr> */}
    </>
  )
}

export default TableRow;