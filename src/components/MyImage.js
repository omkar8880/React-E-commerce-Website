import React, { useState, useEffect } from "react";

function MyImage({ imgs = [{ url: "" }] }) {
    const [mainImage, setMainImage] = useState(imgs[0]);
    
    return (
        <div className="main-myImage">
            <div className="grid-four-column-myImage myImage">
                {imgs.map((curElm, index) => {
                    return (
                        <img
                            src={curElm.url}
                            alt={curElm.filename}
                            className="box-image--style"
                            key={index}
                            onClick={() => setMainImage(curElm)}
                        />
                    );
                })}
            </div>
            {/* 2nd column  */}

            <div className="main-screen">
                <img src={mainImage.url} alt={mainImage.filename} className="main-screen-img"/>
            </div>
        </div>
    );
}

export default MyImage;