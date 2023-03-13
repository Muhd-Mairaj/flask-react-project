import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';


function TableRow({ key, item, itemFieldRef, expiry, expiryFieldRef, onCancel, onEdit }) {
  useEffect(() => {
  }, [key])

  return (
    <>
      <tr key={key}>
        <td>
          <InputField
            name="item"
            placeholder="Item name"
            value={item}
            onChange={(event) => {handleChange()}}
            fieldRef={itemFieldRef}
          />
        </td>
        <td>
          <InputField
            name="expiry"
            placeholder="expiry"
            type="date"
            value={expiry}
            fieldRef={expiryFieldRef}
          />
        </td>
        <td>
          <Button variant="dark" className="w-5" onClick={onCancel}>Cancel</Button>
          <Button variant="dark" className="w-5 ms-2" onClick={onEdit}>Confirm</Button>
        </td>
      </tr>
    </>
  )
}

export default TableRow;