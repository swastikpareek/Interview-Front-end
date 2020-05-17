import React from 'react';

/**
 * Helper component for conditional loader
 */

const loader = (props) => {
  const { condition } = props;

  if (condition) {
    return (
      <div className='d-flex flex-column w-100 align-items-center p-5'>
        <div className='spinner-grow' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default loader;
