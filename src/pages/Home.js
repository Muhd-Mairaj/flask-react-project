import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Body from '../components/Body';
import InputField from '../components/InputField'
import '../index.css';

function Home() {
  const [items, setItems] = useState(null)
  const itemField = useRef();
  const expiryField = useRef();


  useEffect(() => {
    fetch("/profile").then(response => response.json()).then(data => {
      console.log(data.items)
      setItems(data.items)
    }).catch(error => console.log(error))
  }, []);
  

  function handleSubmit(event) {
    event.preventDefault();
    const itemName = itemField.current.value;
    const expiry = expiryField.current.value;
    alert(itemName, expiry)
  }
  
  return (
    <Body loggedIn>
      <Form onSubmit={handleSubmit}>
        <Row className="horizontalForm">
          <Col xs={12} sm={7} className="py-1">
            <Form.Group controlId=item
            <Form.Control placeholder="Item name" ref={itemField}/>
          </Col>
          <Col xs={12} sm={3} className="py-1">
            <Form.Control type="date" ref={expiryField}/>
          </Col>
          <Col xs={12} sm={2} className="py-3">
            <Button variant="dark" className="w-100" type="submit">Add</Button>
          </Col>
        </Row>
      </Form>
        {/* <Stack direction="horizontal" className="horizontalForm" gap={3}>
          // <Form onSubmit={handleSubmit}>
            <Form.Control className="" placeholder="Item name"/>
            <Form.Control className="me-auto w-auto" placeholder="Item name" type="date"/>
            <Button variant="dark" className="" type="submit">Add</Button>

          // </Form>
        </Stack>*/
        }

        {items ? <Table striped bordered variant="dark" responsive="lg">
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
