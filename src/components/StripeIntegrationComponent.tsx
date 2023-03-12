// import router from 'next/router';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createCustomer } from '../../redux/customer/customer.actions';
// import { checkIsCustomer } from '../../redux/user/user.actions';
import IntegrationCards from './integration-cards';

const StripeIntegrationCard = () => {
//   const dispatch = useDispatch();
//   const { user, isCustomer, isPaid } = useSelector((state: any) => state.user);
//   const { accountUrl } = useSelector((state: any) => state.customer);

//   useEffect(() => {
//     if (user) {
//       dispatch(checkIsCustomer());
//     }
//   }, []);

//   useEffect(() => {
//     if (accountUrl) {
//       router.push(accountUrl);
//     }
//   }, [accountUrl]);

//   const onCreatecustomer = (e: any) => {
//     e.preventDefault();
//     dispatch(createCustomer());
//   };


  return (
    <IntegrationCards
      title={"Stripe"}
      description={"Receive customer payments via Stripe with your Pay Now button"}
    //   onSetup={onCreatecustomer}
    //   isEnabled={isCustomer && isPaid}
      disable={true} />
  );
};

export default StripeIntegrationCard;
