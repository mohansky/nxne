import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const FORMSPARK_FORM_ID = "ffYSFxYG";

export default function EnquiryForm({ title }) {
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } 
    else{
      e.preventDefault();
      await submit({ name, email, title, message });
      router.push("/thankyou")
    }
    setValidated(true);
  };

  return (
    <>
      <div className="col-lg-8 col-md-10">
        <Form
          name="enquiryForm"
          noValidate
          validated={validated}
          onSubmit={onSubmit} 
        >
          <input
            type="checkbox"
            name="_honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <input type="hidden" name="form-name" value="enquiryForm" />
          <input id="tourtitle" name="tourtitle" type="hidden" value={title} />
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="formName">
                <InputGroup hasValidation>
                  <Form.Control
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your Name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="formEmail">
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formTextarea">
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                type="message"
                name="message"
                placeholder="Your message. Please include as much information about your requirement."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <motion.div
            className="text-center mb-5"
            whileTap={{ scale: 0.9, opacity: 0.5 }}
          >
            <Button variant="primary" type="submit" disabled={submitting}>
              Submit
            </Button>
          </motion.div>
        </Form>
      </div>
    </>
  );
}
