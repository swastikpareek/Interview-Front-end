import React from 'react';

export default function (props) {
  const { onSearch } = props;

  const onChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className='input-group mb-5'>
      <input type='text' className='form-control' placeholder='Search Events' onChange={onChange} />
    </div>
  );
}
