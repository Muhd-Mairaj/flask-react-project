import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InputField from './InputField';


function TableRow({ key, item, itemFieldRef, itemError, expiry, expiryFieldRef, expiryError, onCancel, onConfirm }) {
  const [itemField, setItemField] = useState(item);
  const [expiryField, setExpiryField] = useState(expiry);

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
      <Form onSubmit={onConfirm}>
        <tr key={key}>
          <td>
            <InputField
              name="item"
              placeholder="Item name"
              value={itemField}
              onChange={(event) => {setItemField(event.target.value)}}
              fieldRef={itemFieldRef}
              error={itemError}
              />
          </td>
          <td>
            <InputField
              name="expiry"
              placeholder="expiry"
              type="date"
              value={expiryField}
              onChange={(event) => {setExpiryField(event.target.value)}}
              fieldRef={expiryFieldRef}
              error={expiryError}
            />
          </td>
          <td>
            <Button variant="dark" className="w-5" onClick={onCancel}>Cancel</Button>
            <Button variant="dark" className="w-5 ms-2" type="submit">Confirm</Button>
          </td>
        </tr>
      </Form>
    </>
  )
}

export default TableRow;