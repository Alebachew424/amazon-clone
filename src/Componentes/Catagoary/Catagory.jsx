import React from "react";
import { categoryInfos } from "./catagoryFullInfo";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";

function Catagoary() {
  return (
    <section className={classes.section}>
      {categoryInfos.map((infos, index) => (
        <CatagoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Catagoary;
