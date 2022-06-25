import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormspark } from "@formspark/use-formspark";
import {useRouter} from 'next/router'

const FORMSPARK_FORM_ID = "ffYSFxYG";

export default function EnquiryForm({ title }) {
  const router = useRouter()
const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");
 
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, title, message });
    router.push("/thankyou")
  };
  
  return ( 
    <>
      <div className="col-lg-8 col-md-10"> 
        <Form
          name="enquiryForm" 
          onSubmit={onSubmit}
        > 
          <input
              type="checkbox"
              name="_honeypot"
              style={{display: 'none'}}
              tabIndex="-1"
              autocomplete="off"
            />
            <input type="hidden" name="_email.from" value={name} />
          <input type="hidden" name="form-name" value="enquiryForm" />
          <input
            id="tourtitle"
            name="tourtitle"
            type="hidden"
            value={title}
          />
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={name} onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formTextarea"> 
            <Form.Control as="textarea" 
              type="message"
              name="message"
              placeholder="Your message. Please include as much information about your requirement." 
              value={message} onChange={(e) => setMessage(e.target.value)}
              rows="5"/>
          </Form.Group>

          <div className="d-grid mb-5">
            <Button variant="primary" type="submit" disabled={submitting}>
              Submit
            </Button>
          </div>
        </Form> 
      </div>
    </>
  );
}
