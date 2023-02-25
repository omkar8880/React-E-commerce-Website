import React, { useState } from "react";

function Myimage({ img = [{ url: "" }] }) {
    const [mainImage, setImage] = useState(img[0]);
    return (
        <div className="main-div-image">
            <div className="grid-7">
                {img.map((curElem, index) => {
                    return (
                        <figure className="single-image">
                            <img className="single-product-image"
                                src={curElem.url} alt={curElem.filename} key={index} onClick={() => setImage(curElem)} />
                        </figure>
                    )
                })}
            </div>
            <div>
                <figure><img className="single-product-main-image" src={mainImage.url} /></figure>
            </div>
        </div>
    )
}

export default Myimage;