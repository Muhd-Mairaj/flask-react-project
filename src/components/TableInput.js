import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';


function TableRow({ key, item, itemFieldRef, expiry, expiryFieldRef, onCancel, onEdit }) {
  useEffect(() => {
  }, [key])


  function handleChange(event, ref) {
    console.log("ref.current.value", ref.current.value)

    const updatedText = event.target.value;
    console.log("updatedText", ref.current.value)

    ref.current.value = updatedText;
    return
  }

  return (
    <>
      <tr key={key}>
        <td>
          <InputField
            name="item"
            placeholder="Item name"
            value={item}
            onChange={(event) => {handleChange(event, itemFieldRef)}}
            fieldRef={itemFieldRef}
            />
        </td>
        <td>
          <InputField
            name="expiry"
            placeholder="expiry"
            type="date"
            value={expiry}
            onChange={(event) => {handleChange(event, expiryFieldRef)}}
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