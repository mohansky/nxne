import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import SuccessMessage from "./success-message";

export default function EnquiryForm({ title }) {
  // const [show, setShow] = useState(false);

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) =>
  //         encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }
  
  // const formSubmitHandeler = (event) => {
  //   event.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": event.target.getAttribute("name"),
  //       ...name,
  //     }),
  //   })
  //     .then(setShow(!show))
  //     .catch((error) => alert(error));
  // };

  // handleChange = e => this.setState({ [e.target.name]: e.target.value });
  // const formSubmitHandeler = (e) => {
  //   e.preventDefault();
  //   setShow(!show);
  // };
  return ( 
    <>
      <div className="col-lg-6 col-md-7">
      {/* {!show && ( */}
        <Form
          name="enquiryForm" 
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thankyou"
          // onSubmit={formSubmitHandeler}
        >
          <p className="d-none">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
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
                  // value={name}
                  // onChange={this.handleChange} 
                  placeholder="Name"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={this.handleChange} 
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formTextarea"> 
            <Form.Control as="textarea" 
                type="message"
                name="message"
            // value={message} onChange={this.handleChange} 
            placeholder="Your message. Please include as much information about your requirement." rows="5"/>
          </Form.Group>

          <div className="d-grid mb-5">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        {/* )}
        {show && <SuccessMessage />} */}
      </div>
    </>
  );
}
