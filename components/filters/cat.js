import { getAllTours } from "../../lib/api";
import { useEffect, useState } from "react";
import { CMS_NAME } from "../../lib/constants";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { motion } from "framer-motion";
import TourItem from "../../components/tours/tour-item";
import Filtersdata from "../../data/filters.json"

export default function CategoryFilter( ) {
//   const [filteredList, setFilteredList] = useState(allTours);
//   const [selectedTag, setSelectedTag] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("active");

//   const filterByTag = (filteredData) => {
//     if (!selectedTag) {
//       return filteredData;
//     }

//     const filteredTours = filteredData.filter(
//       (tour) => tour.tags.indexOf(selectedTag) !== -1
//     );
//     return filteredTours;
//   };
//   const filterByCategory = (filteredData) => {
//     if (!selectedCategory) {
//       return filteredData;
//     }

//     const filteredTours = filteredData.filter(
//       (tour) => tour.category === selectedCategory
//     );
//     return filteredTours;
//   };

//   const handleTagChange = (event) => {
//     setSelectedTag(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     const inputCategory = event.target.id;

//     if (inputCategory === selectedCategory) {
//       setSelectedCategory(inputCategory);
//     } else {
//       setSelectedCategory(inputCategory);
//       setSelectedTag("");
//     }
//   };

//   useEffect(() => {
//     var filteredData = filterByTag(allTours);
//     filteredData = filterByCategory(filteredData);
//     setFilteredList(filteredData);
//   }, [selectedTag, selectedCategory]);

// useEffect(() => {
//     var filteredData = filterByCategory(filteredData);
//     setFilteredList(filteredData);
//   }, [selectedCategory]);

  return (
    <>
      <div className="tour-filters mt-5">
        <div className="mx-auto">
          <div
            id="category-options"
            className=" justify-content-center mb-5"
            // onClick={handleCategoryChange}
          >
            {Filtersdata.category.map((item, index) => (
              <motion.div
                key={index}
                // className={
                //   selectedCategory === `{item.url}`
                //     ? "active-option"
                //     : "filter-option"
                // }
                id="active"
                whileTap={{ scale: 0.9 }}
              >
                {item.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
