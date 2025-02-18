import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.js";
import Filter from "../Filter/Filter.js";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Actions/index.js";
import ScrollToTop from "react-scroll-to-top";

function Home(props) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  /*   useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); */

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}>
        <Filter setCurrentPage={setCurrentPage} filter={{}} />
      </div>
      <div className={styles.cardsContainer}>
        {" "}
        <Cards
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filter={{}}
        />{" "}
      </div>
      <ScrollToTop
        smooth={true}
        color="white"
        className={styles.scrolltotop1}
        style={{
          backgroundColor: "#91C612",
          marginBottom: "30px",
        }}
      />
    </div>
  );
}

export default Home;
