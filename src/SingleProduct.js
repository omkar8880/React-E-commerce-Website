import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./contex/ProductContex";
import PageNavigation from "./components/PageNavigation";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import FormatPrice from "./Helpers/FormatPrice";
import MyImage from "./components/MyImage";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";
function SingleProduct() {

    const { id } = useParams();
    const { isSingleLoading, singleProduct, getSingleProduct } = useProductContext();
    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    if (isSingleLoading) {
        return <div className="page-loading">Loading....</div>;
    }

    return (
        <div className="container-single-product">
            <PageNavigation title={name} />
            <div className="grid-two-column-single-product">
                {/* product Images  */}
                <div className="product_images">
                    <MyImage imgs={image} />
                </div>

                {/* product dAta  */}
                <div className="product-data" style={{ margin: "-5rem 0rem", padding: "1rem 0rem" }}>
                    <h2 className="single-product-h2" style={{ textTransform: "capitalize" }}>{name}</h2>
                    <Star stars={stars} reviews={reviews} />
                    <p className="product-data-price single-product-p">
                        MRP:
                        <del>
                            <FormatPrice price={(price + 250000) * 10} />
                        </del>
                    </p>
                    <p className="product-data-price product-data-real-price single-product-p">
                        Deal of the Day: <FormatPrice price={price * 10} />
                    </p>
                    <p className="single-product-p" style={{ textAlign: "left", fontSize: "0.9rem", color: "#3c4c5a" }}>{description}</p>
                    <div className="product-data-warranty">
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="warranty-icon" />
                            <p className="single-product-p" style={{ fontSize: "0.9rem" }}>Free Delivery</p>
                        </div>

                        <div className="product-warranty-data">
                            <TbReplace className="warranty-icon" />
                            <p className="single-product-p" style={{ fontSize: "0.9rem" }}>30 Days Replacement</p>
                        </div>

                        <div className="product-warranty-data">
                            <TbTruckDelivery className="warranty-icon" />
                            <p className="single-product-p" style={{ fontSize: "0.9rem" }}>Speed Delivery </p>
                        </div>

                        <div className="product-warranty-data">
                            <MdSecurity className="warranty-icon" />
                            <p className="single-product-p" style={{ fontSize: "0.9rem" }}>2 Year Warranty </p>
                        </div>
                    </div>

                    <div className="product-data-info">
                        <p className="single-product-p" style={{ fontSize: "0.9rem", color: "#6d7d8b" }}>
                            Available:
                            <span style={{ fontWeight: "bold", color: "#554dd9" }}> {stock > 0 ? "In Stock" : "Not Available"}</span>
                        </p>
                        <p className="single-product-p" style={{ fontSize: "0.9rem", color: "#6d7d8b" }}>
                            ID : <span style={{ fontWeight: "bold", color: "#554dd9" }}> {id} </span>
                        </p>
                        <p className="single-product-p" style={{ textAlign: "left", fontSize: "0.9rem", color: "#6d7d8b" }}>
                            Brand :<span style={{ fontWeight: "bold", color: "#554dd9" }}> {company} </span>
                        </p>
                    </div>
                    <hr />
                    {stock > 0 && <AddToCart product={singleProduct} />}
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;