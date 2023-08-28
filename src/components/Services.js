import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services(){
    return(
        <div className="container-1">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h4>Super Fast and Free Delivery</h4>
            </div>
          </div>

          <div className="services-2">
            <div className="services-column-2">
              
                <MdSecurity className="icon" />
                <h4 className="icon-h4">Non-contact Shipping</h4>
            
            </div>
            <div className="services-column-2">
              
                <GiReceiveMoney className="icon" />
                <h4 className="icon-h4">Money-back Guaranteed</h4>
             
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h4>Super Secure Payment System</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;