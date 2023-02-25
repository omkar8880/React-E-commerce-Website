import { defer } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import Product from "./Product";

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return <div> ......Loading </div>;
    }

    return (
        <div className="featured-info">
            <div className="featured-product">
                <div className="main-data">
                    <p className="intro-data">CHECK NOW!</p>
                    <h1 className="common-heading">Our Feature Services</h1>
                </div>
                <div className="grid-5 grid-column-three">
                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;