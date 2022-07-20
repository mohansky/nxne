import { getAllTours } from "../../lib/api";
import { useEffect, useState } from "react";
import { CMS_NAME } from "../../lib/constants";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { motion } from "framer-motion";
import TourItem from "../tours/tour-item";
import Filtersdata from "../../data/filters.json"

export default function Tags () { 
  return (
    <> 
      <div className="d-md-flex"> 
      {Filters.active.map((item, index) => ( 
        <div className="form-check me-3" key={index}> 
          <input 
            className="form-check-input" 
            type="radio" 
            name="flexRadioDefault"  
            value={item.url} />
          <label 
            className="form-check-label" 
            htmlFor="flexRadioDefault1">
            {item.name}
          </label> 
        </div>
       ))}
      </div>
    </>
  );
}
 



            

          
                  



 
                
                   





 

 
                  