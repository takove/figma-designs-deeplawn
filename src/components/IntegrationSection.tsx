import React from 'react';
// import StripeIntegrationCard from '../create-customer-card/stripe-integration-card';
// import CustomFieldsIntegration from '../customFields-integration';
// import { FieldRouteIntegration } from '../FieldRoute-integration';
// import HubspotIntegration from '../hubspot-integration';
// import PaypalIntegration from '../paypal-integration';
// import RealGreenIntegration from '../real-green-integration';
// import ServiceAutoPilotBanner from '../service-autopilot/service-autopilot-banner.component';
import StripeIntegrationCard from "./StripeIntegrationComponent";

const IntegrationsSection = () => {
    return (
      <div className="py-8">
        <StripeIntegrationCard />
        {/* <br />
        <PaypalIntegration />
        <br />
        <ServiceAutoPilotBanner />
        <br />
        <HubspotIntegration />
        <br />
        <CustomFieldsIntegration />
        <br />
        <RealGreenIntegration />
        <br />
        <FieldRouteIntegration /> */}
      </div>
    );
  };
  
  export default IntegrationsSection;
  