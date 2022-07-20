import React from "react";
import {Accordion} from 'react-bootstrap';
import Regiondata from "../data/regionaccordian.json"; 
 

export default function Accordian() {  
  return (
    <>
      <Accordion className="card border-0  mb-1" defaultActiveKey="0" flush>
        {Regiondata.accordion.map((item, index) => ( 
          <Accordion.Item
            className="card-header text-color border-0 p-0"
            key={index}
            eventKey={index}
          >
            <Accordion.Header className=" h5 d-block text-color mb-2 py-0 px-0" >
                {item.title}
            </Accordion.Header>
            <Accordion.Body className=" font-secondary text-color p-3">
              {item.text}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>  
    </>
  );
}
