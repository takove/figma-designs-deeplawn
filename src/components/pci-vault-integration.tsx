import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCustomer } from '../../redux/customer/customer.actions';
// import sendRequest from '../../utils/useAxios';
// import ToggleButtonCustom from '../common/toggle-btn';
// import IntegrationCard from './integration-cards';
// import ConfirmationModal from '../subscribed-package-card/confirmation-modal.component';

const PciVaultIntegration = () => {
//   const { customer } = useSelector((state: any) => state.customer);
//   const { user } = useSelector((state: any) => state.user);
  const [showModal, setShowModal] = useState(false)
  const [enablePciVault, setEnablePciVault] = useState(false);
  const [input_Error, setInput_Error] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!customer) {
//       dispatch(getCustomer());
//     }
//   }, []);

//   const getPciVaultIntegration = async () => {
//     const { data } = await sendRequest('GET', `/integrations/checkIntegration/${customer._id}/pciVault`)
//     if (data && !data.statusCode) {
//       setEnablePciVault(data)
//       return
//     }
//     setEnablePciVault(false)
//   }

//   useEffect(() => {
//     if (customer) {
//       getPciVaultIntegration()
//     }
//   }, [customer]);

//   const handleCreate = async () => {
//     if (!username || !password || !confirmPassword) {
//       setInput_Error("Please provide required information before submit")
//       return
//     }
//     if (password.length < 8) {
//       setInput_Error("password must contain atleast 8 characters")
//       return
//     }
//     if (password !== confirmPassword) {
//       setInput_Error("Confirm password must match")
//       return
//     }
//     const formBody = {
//       customerId: customer._id,
//       subscriptionId: customer.subscription,
//       username,
//       password,
//     }
//     const { data } = await sendRequest('POST', '/integrations/pciVault', formBody)
//     if (data && !data.statusCode) {
//       setEnablePciVault(true)
//       handleBack()
//       return
//     }
//     setInput_Error(data?.message)
//   };

  const handleBack = () => {
    setInput_Error('')
    setUsername('')
    setPassword('')
    setShowModal(false)
  }

  const handleToggleChange = async () => {
    if (enablePciVault) {
      return
    } else {
      setShowModal(true)
    }
  };

  return (
    <div className=''>
      {/* {showModal && <ConfirmationModal onBack={handleBack} onConfirm={handleCreate}> */}
      {showModal &&
        <div>
          Please provide Username and Password that will be used to access credit card data from PCI vault
          <br/>
          <span className='text-blue-400'>You will be charged $75 a month.</span>
          <br /><br />
          <div className="col-span-8 sm:col-span-1">
            <label className="block text-gray-700 text-left text-sm font-bold mb-1 mt-4" >
              Username :
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            />

            <label className="block text-gray-700 text-left text-sm font-bold mb-1 mt-4" >
              Password :
            </label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            />

          <label className="block text-gray-700 text-left text-sm font-bold mb-1 mt-4" >
            Confirm Password :
          </label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          />
        </div>
          {input_Error && <p className='text-red-700 text-left text-sm mt-2'>{input_Error}</p>}
        </div>
    //   </ConfirmationModal>}
      }
      <div className="p-5 bg-white relative group border-2 border-gray-200 rounded-lg h-auto md:px-8  shadow-lg">
        {/* <div className="rounded-t-lg overflow-hidden h-36 flex items-center">
                <img src="/assets/hd-imagery.PNG" alt="HD Imagery Image" className="object-center mx-auto w-16" />
              </div> */}
        <div className="text-gray-900 text-base md:text-2xl font-medium flex flex-row items-center justify-between mb-3">
        <h3>PCI Vault</h3>
          {/* <Toggle
            // disabled={enableAdvancedServiceArea}
            value={enableAdvancedServiceArea}
            onChange={handleToggleChange}
          /> */}
           {/* <ToggleButtonCustom
                heading={null}
                tooltiptext={null}
                btn1text="Enable"
                btn2text="Disable"
                active={enablePciVault}
                customHandler={handleToggleChange}
                

              /> */}
        </div>
        <div className="flex w-full text-base text-gray-700">
        Store and retrieve your customer's billing information in a PCI compliant vault.<br/>$75 per month - unlimited use.
        </div>
        {/* <p className="mt-1 px-3 py-2 text-sm text-gray-500">Request details to activate HD Imagery</p> */}
      </div>
    </div>
  );
};

export default PciVaultIntegration;
