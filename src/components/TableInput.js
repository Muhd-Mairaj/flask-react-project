import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';


function TableRow({ key, item, itemFieldRef, expiry, expiryFieldRef, onCancel, onEdit }) {
  const [itemField, setItemField] = useState(item);
  const [expiryField, setexpiryField] = useState(expiry);

  useEffect(() => {
  }, [key])


  function handleChange(event, ref) {
    console.log("ref.current.value", ref.current.value)

    const updatedText = event.target.value;
    console.log("updatedText", updatedText)

    // ref.current.value = updatedText;
    // console.log("ref.current.value", ref.current.value)
    return
  }

  return (
    <>
      <tr key={key}>
        <td>
          <InputField
            name="item"
            placeholder="Item name"
            value={itemField}
            onChange={(event) => {setItemField(event.target.value)}}
            fieldRef={itemFieldRef}
            />
        </td>
        <td>
          <InputField
            name="expiry"
            placeholder="expiry"
            type="date"
            value={expiryField}
            onChange={(event) => {setexpiryField(event.target.value)}}
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