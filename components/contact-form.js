import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useFormspark } from "@formspark/use-formspark";
import {useRouter} from 'next/router'

const FORMSPARK_FORM_ID = "12lwBpSd";

export default function ContactForm() {
  const router = useRouter()
const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, subject, message });
    router.push("/thankyou")
  };
  
  return (
    <>
        <div className="p-5 rounded box-shadow">
            <Form
              name="contact" 
              onSubmit={onSubmit}
            >
              <div className="col-lg-12">
                <h3 className="mb-4">Get in touch</h3>
              </div>
              <input
              type="checkbox"
              name="_honeypot"
              style={{display: 'none'}}
              tabIndex="-1"
              autoComplete="off"
            />
            <input type="hidden" name="_email.from" value={name} />
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name} onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject} onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Control
                  as="textarea"
                  name="textarea"
                  placeholder="Message"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit" disabled={submitting}>
                  Submit
                </Button>
              </div>
            </Form>
        </div>
    </>
  );
}
