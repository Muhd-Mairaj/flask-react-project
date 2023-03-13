import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';


function TableRow({ editing, key, style, item, expiry, onRemove, onEdit }) {
  const

  useEffect(() => {
    console.log("editing", editing)
    console.log("key", key)
  }, [editing, key])

  return (
    <>
      <tr key={key} style={style}>
        <td>{item}</td>
        <td>{expiry}</td>
        <td>
          <Button variant="dark" className="w-5" onClick={onRemove}>Remove</Button>
          <Button variant="dark" className="w-5 px-4 ms-2" onClick={onEdit}>Edit</Button>
        </td>
      </tr>
    </>
  )
}

export default TableRow;