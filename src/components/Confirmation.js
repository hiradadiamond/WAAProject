import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export const Confirmation = (props) =>{
    const personalInfo = useSelector(state=>state.user.personalInfo);
    const paymentInfo = useSelector(state=>state.user.paymentDetails);
    console.log(paymentInfo);
    console.log(personalInfo);
    return (
        <div>
            <h1>Confirmation Details</h1>
            <div>
                <h3>Personal Details</h3>
                <div>Name:{personalInfo.name}</div>
                <div>Email:{personalInfo.email}</div>
                <div>Phone:{personalInfo.phone}</div>
                <div>Street:{personalInfo.street}</div>
                <div>City:{personalInfo.city}</div>
                <div>Zip:{personalInfo.zip}</div>
            </div>
            <div>
                <h3>Payment Details</h3>
                {/* <div>CreditCardNumber: {paymentInfo.creditNumber}</div> */}
                <div>CreditCard Type:{paymentInfo.creditcardType}</div>
                <div>ExpiryDate:{paymentInfo.validDate}</div>
                <div>CSV-Code: {paymentInfo.validationCode}</div>
            </div>
        </div>
    );

}