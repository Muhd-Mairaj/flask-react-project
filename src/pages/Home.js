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


function Home() {
  const api = useApi()
  const [items, setItems] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  const itemField = useRef()
  const expiryField = useRef()
  
  
  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-}`
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
    })()
  }, [api])


  function handleSubmit(event) {
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
    const response = api.post("/add", {
      item: item,
      expiry: expiry
    }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })
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
              min={new Date()}
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

      {items ? <Table striped bordered variant="dark" responsive="lg" className="Home">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, _) => (
              <tr key={item.key}>
                <td>{item.key}</td>
                <td>{item.item}</td>
                <td>{item.expiry}</td>
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

export default Home;


    /* METHOD 2 - WORKS */
// function getData() {
//   fetch("/profile").then(response => response.json()).then(data => {
//         console.log(data.items)
//         setProfileData({
//             items: data.items,
//         })
//       }).catch(error => console.log(error))
//     }
    /** END METHOD 2 */
