import React from 'react';
// import AdvancedServiceAreaSetting from '../adnaced_serviceArea_setting';
// import EnableHDMeasurements from '../enable-hd-measurements';
import PciVaultIntegration from './pci-vault-integration';
// import SettingsScreen from '../settings';
// import EnableBuildingSqFeet from '../enable-building-sqfeet';
// import HousePerimeter from '../house-perimeter';
// import SnowRemoval from '../snow-removal';

const AddonsSection = () => {
    return (
      <div className="mb-5">
        <PciVaultIntegration />
        {/* <br />
        <HDImageryIntegration /> */}
        {/* <br />
        <AdvancedServiceAreaSetting />
        <br />
        <EnableHDMeasurements />
        <br />
        <EnableBuildingSqFeet />
        <br />
        <HousePerimeter />
        <br />
        <SnowRemoval />
        <br />
        <SettingsScreen />
        <br />
        <br /> */}
      </div>
    );
  };
  
  export default AddonsSection;
  