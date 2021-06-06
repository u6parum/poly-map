import React from 'react';

const FactoryDetailsComponent = () => {
  return (
    <svg viewBox="0 0 500 500" height="500" width="200" x="850" y="-260">
      {/* <circle id="curve" cx="0" cy="220" r="5%" stroke="white" fill="transparent" /> */}
      <path id="curve" d="M 100 100 a 50 50 0 1 0 35 85" stroke="white" fill="transparent" />
      {/* <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" /> */}
      <text width="100">
        <textPath alignmentBaseline="top" xlinkHref="#curve">
          Dangerous Curves Ahead
        </textPath>
      </text>
    </svg>
  );
}

export default FactoryDetailsComponent;