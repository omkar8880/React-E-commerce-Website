import React from "react";
import Product from "../Product";

function GridView({products}){
    return(
        <div className="container-7 grid-three-column-grid-view">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    );
}

export default GridView;