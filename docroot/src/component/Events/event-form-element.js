import React from 'react';

export default function ({ item, onChange }) {
  const change = (event) => {
    onChange(event);
  };

  return (
    <div className='form-group mb-3' key={item.key}>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>{item.title}</span>
        </div>
        <input
          className='form-control'
          onChange={change}
          data-key={item.key}
          aria-label={item.title}
          {...item.opts}
        />
      </div>
      <small className='form-text text-danger'>{item.errorMessage}</small>
    </div>
  );
}
