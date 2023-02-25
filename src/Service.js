import React from "react";
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"

function Services() {
    return (
        <div className="grid-2 grid-column-three container">
            <div className="services-1">
                <TbTruckDelivery className="icon" />
                <h3>Super Fast and Free Delivery</h3>
            </div>
            <div className="services-2">
                <div className="services-part-1">
                    <MdSecurity className="icon" />
                    <h3>Non-contact Shipping</h3>
                </div>
                <div className="services-part-2">
                    <GiReceiveMoney className="icon" />
                    <h3>Money-back Guaranteed</h3>
                </div>
            </div>
            <div className="services-3">
                <RiSecurePaymentLine className="icon" />
                <h3>Super Secure Payment System</h3>
            </div>
        </div>
    )
}

export default Services;
