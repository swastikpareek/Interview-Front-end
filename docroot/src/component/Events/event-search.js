import React from 'react';

export default function(props) {
  const {onSearch} = props;
  let _input;

  const onChange = (e) => {
    onSearch(_input.value);
  }

  return (
    <div className="input-group mb-5">
      <input type="text" className="form-control" placeholder="Search Events" onChange={onChange} ref={input => _input = input }/>
    </div>
    )
}
