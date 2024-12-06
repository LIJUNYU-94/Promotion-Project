import { useState, useEffect } from "react";
import data from "./data.json";
const Midashis = data.h2;

function Midashi({ x }) {
  const { ttl, sub } = Midashis[x];
  return (
    <>
      <h2 className={Midashis[x].class || ""}>
        {Array.isArray(ttl)
          ? ttl.map((x, index) => (
              <span className={x.class || ""} key={index}>
                {x.text}
              </span>
            ))
          : ttl}
        <span className="ttl_sub">{Midashis[x].sub}</span>
      </h2>
    </>
  );
}
export default Midashi;
