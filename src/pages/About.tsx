import React, { useState } from 'react';
import RmHorizontalCircleList from '../rm-components/rm-horizontal-circle-list';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {

   return (<RmHorizontalCircleList/>);
};

export default React.memo(About);
