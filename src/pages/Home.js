import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Body from '../components/Body';
import InputField from '../components/InputField';
import { useApi } from '../contexts/ApiProvider';
import '../index.css';


export default function Home() {
  const api = useApi()
  const [items, setItems] = useState([])
  const [formErrors, setFormErrors] = useState({})
  const itemField = useRef()
  const expiryField = useRef()

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

    if (!item) {
      errors.item = "Item field must not be empty"
    }
    if (!expiry) {
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
      console.log("FAILED");
      console.log(response);
      return
    }

    // remove item from items list
    console.log("SUCCESS");
    console.log(response);
    console.log(items);
    let array = items.filter(function(item) {return item.item_id !== key})
    console.log(array);

    setItems(items.filter(function(item) {return item.item_id !== key}))

    // const response =
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
              <tr key={item.item_id} style={{"backgroundColor": `${item.bg === "red" ? "#ff0000a0": ""}`}}>
                <td>{item.item}</td>
                <td>{item.expiry}</td>
                <td><Button variant="dark" className="w-5" onClick={() => {removeItem(item.item_id)}}>Remove</Button></td>
              </tr>
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
