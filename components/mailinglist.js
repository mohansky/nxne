import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const FORMSPARK_FORM_ID = "12lwBpSd";

export default function MailingList() {
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else{
      e.preventDefault();
      await submit({ name, email, subject, message});
      router.push("/thankyou")
    } 
    setValidated(true);
  };

  const { ref, inView, entry } = useInView({threshold: 0.3});
  const animation = useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,  
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0}) 
      }
  }, [inView]);

  return (
    <>
      <div ref={ref} >
        <motion.div animate={animation} >
        <Form
          name="mailinglist"
          noValidate
          validated={validated}
          onSubmit={onSubmit} 
        >
          <div className="col-lg-12">
          </div>
          <input
            type="checkbox"
            name="_honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <Row>
            <Col sm={12}>
              <Form.Group className="bg-dark mb-3" controlId="formName">
                <InputGroup hasValidation>
                  <Form.Control 
                    className="mailinglist"
                    type="text"
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
            </Col>
            <Col sm={12}>
              <Form.Group className="mb-3" controlId="formEmail">
                <InputGroup hasValidation>
                  <Form.Control
                    className="mailinglist"
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
            </Col>
          </Row>
          <motion.div
            className="text-center"
            whileTap={{ scale: 0.9, opacity: 0.5 }}
          >
            <Button variant="primary" type="submit" disabled={submitting}>
              Submit
            </Button>
          </motion.div>
        </Form>
        </motion.div>
      </div>
    </>
  );
}
