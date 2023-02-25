import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import { useProductContext } from "./context/productcontex";
import Myimage from "./components/Myimage";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./Star";
import AddColor from "./AddColor";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
    const { isSingleLoading, singleProduct, getsingleProduct } = useProductContext();
    const { id } = useParams();
    const { id: alias, name, company, image, price, description, category, stock, reviews, stars } = singleProduct;
    useEffect(() => {
        getsingleProduct(`${API}?id=${id}`);
    }, []);
    return (
        <div>
            <PageNavigation title={category} />
            <div className="grid-6 grid-column-two">
                <div>
                    <p><Myimage img={image} /></p>
                </div>
                <div className="single-product-data">
                    <h2>{name}</h2>
                    <Star stars={stars} reviews={reviews} />
                    <p><strong>MRP : </strong><del><FormatPrice price={price + 250000} /></del></p>
                    <strong><p className="deal-price">Deal of the Day : <FormatPrice price={price} /></p></strong>
                    <p className="product-description">{description}</p>
                    <div className="product-warranty">
                        <div className="warranty-div">
                            <TbTruckDelivery className="warranty-icon" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="warranty-div">
                            <TbReplace className="warranty-icon" />
                            <p>30 Days Replacement</p>
                        </div>
                        <div className="warranty-div">
                            <TbTruckDelivery className="warranty-icon" />
                            <p>Easy Returns</p>
                        </div>
                        <div className="warranty-div">
                            <MdSecurity className="warranty-icon" />
                            <p>2 Year Warranty</p>
                        </div>
                    </div>
                    <p><strong>Available : </strong><span>{stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                    <p><strong>ID : </strong>{id}</p>
                    <p><strong>Brand : </strong>{company}</p>
                    <hr />
                    <div>{stock > 0 && <AddColor product={singleProduct} />}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;