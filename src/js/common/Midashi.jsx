import { useState, useEffect } from "react";
import data from "./data.json";
const Midashis = data.h2;

function Midashi({ x }) {
  const { ttl, sub } = Midashis[x];
  return (
    <>
      <h2 className={Midashis[x].class || ""}>
        {Array.isArray(ttl)
          ? ttl.map((x, index) => {
              if (x.text.includes("こそ、")) {
                const parts = x.text.split("こそ、");
                return (
                  <span className={x.class || ""} key={index}>
                    {parts[0]}こそ、
                    <br className="sp-only" />
                    {parts[1]}
                  </span>
                );
              }
              return (
                <span className={x.class || ""} key={index}>
                  {x.text}
                </span>
              );
            })
          : ttl}
        <span className="ttl_sub">{Midashis[x].sub}</span>
      </h2>
    </>
  );
}
export default Midashi;
