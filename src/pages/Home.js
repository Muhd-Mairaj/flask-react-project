import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Body from '../components/Body';
import InputField from '../components/InputField';
import TableRow from '../components/TableRow';
import TableInput from '../components/TableInput';
import { useApi } from '../contexts/ApiProvider';
import { useFlash } from '../contexts/FlashProvider';

import '../index.css';


export default function Home() {
  const api = useApi()
  const { flash } = useFlash();
  const [items, setItems] = useState([])
  const [isEditing, setIsEditing] = useState(null)

  const itemField = useRef()
  const expiryField = useRef()
  const [formErrors, setFormErrors] = useState({})

  const editItemField = useRef()
  const editExpiryField = useRef()
  const [editFormErrors, setEditFormErrors] = useState({})

  function getDate() {
    const current = new Date();
    const date = current.getFullYear() + "-" + String(current.getMonth()+1).padStart(2, "0") + "-" + String(current.getDate()).padStart(2, "0")
    return date;
  }

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

  async function handleSubmit(event) {
    event.preventDefault();
    const item = itemField.current.value;
    const expiry = expiryField.current.value;

    const errors = {}

    if (!item || !item.trim()) {
      errors.item = "Item field must not be empty"
    }
    if (!expiry || !expiry.trim()) {
      errors.expiry = "Expiry field must not be empty"
    }

    setFormErrors(errors)
    if (Object.keys(errors).length > 0) {
      return;
    }

    // send request to backend
    const response = await api.post("/add", {
      item: item,
      expiry: expiry
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })

    if (!response.ok) {
      setFormErrors(response.body)
      return
    }
    else {
      setFormErrors({})
      itemField.current.value = ""
      expiryField.current.value = ""
      setItems([response.body, ...items])
    }
  }

  async function removeItem(key) {
    const response = await api.delete("/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        id: key
      }
    })

    if (!response.ok) {
      // do something
      console.log(response)
      return
    }

    // remove item from items list
    setItems(items.filter(function(item) {return item.item_id !== key}))
    return;
  }

  async function beginEdit(key) {
    // make sure item is not already being edited
    if (isEditing !== null) {
      flash('You are already editing something!', 'danger', 3);
      return;
    }

    // add item to editing list
    setIsEditing(key);
    return;

    const response = await api.put("/profile", {

    })
  }

  function cancelEdit() {
    setIsEditing(null);
    return;
  }

  async function handleEdit(event, key) {
    event.preventDefault();

    const item = editItemField.current.value;
    const expiry = editExpiryField.current.value;

    const errors = {}

    if (!item || !item.trim()) {
      errors.item = "Item field must not be empty"
    }
    if (!expiry || !expiry.trim()) {
      errors.expiry = "Expiry field must not be empty"
    }

    setEditFormErrors(errors)
    if (Object.keys(errors).length > 0) {
      return;
    }

    const response = await api.put("/profile", {
      item: item,
      expiry: expiry,
      key: key
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })

    if (!response.ok) {
      // flash("Unable to edit", "danger", 3)
      setEditFormErrors(response.body)
      return
    }

    let array = []
    for (let i of items) {
      if (i.item_id === response.body.item_id) {
        array.push(response.body)
      }
      else {
        array.push(i)
      }
    }

    setItems(array);
    setIsEditing(null);
    setEditFormErrors({})
    return
  }

  return (
    <Body>
      <Form onSubmit={handleSubmit}>
        <Row className="HorizontalForm justify-content-center">
          <Col xs={12} sm={7} className="">
            <InputField
              name="item"
              placeholder="Item name"
              fieldRef={itemField}
              error={formErrors.item}
            />
          </Col>
          <Col xs={12} sm={3} className="">
            <InputField
              name="expiry"
              type="date"
              min={getDate()}
              fieldRef={expiryField}
              error={formErrors.expiry}
            />
          </Col>
          <Col xs={11} sm={2} className="py-2">
            <Button variant="dark" className="w-100" type="submit">Add</Button>
          </Col>
        </Row>
      </Form>

      <hr></hr>

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
              <>
              {isEditing === item.item_id ? <TableInput
                    key={item.item_id}
                    item={item.item}
                    itemFieldRef={editItemField}
                    itemError={editFormErrors.item}
                    expiry={item.expiry}
                    expiryFieldRef={editExpiryField}
                    expiryError={editFormErrors.expiry}
                    onCancel={cancelEdit}
                    onConfirm={(event) => {handleEdit(event, item.item_id)}}
                  />
                :
                  <TableRow
                    key={item.item_id}
                    style={{"backgroundColor": `${item.bg === "red" ? "#ff0000a0": ""}`}}
                    item={item.item}
                    expiry={item.expiry}
                    onRemove={() => {removeItem(item.item_id)}}
                    onEdit={() => {beginEdit(item.item_id)}}
                  />
                }
              </>
            ))}
          </tbody>
        </Table>
      :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
    </Body>
  )
}
