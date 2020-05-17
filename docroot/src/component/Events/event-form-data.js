import React from 'react';
import { useDispatch } from 'react-redux';
import { resetForm, logData } from '../../actions/events';

export default function (props) {
  const { data } = props;
  const dispatch = useDispatch();

  const submitAnother = (event) => {
    dispatch(resetForm());
    dispatch(logData(false));
  };

  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <h3> Form Data </h3>
        {data.map((formItem) => {
          return (
            <div key={formItem.key} className='p-2 mb-3'> <b>{formItem.title}</b> : {formItem.opts.value} </div>
          );
        })}
        <button className='btn btn-dark' onClick={submitAnother}> Another Entry </button>
      </div>
    </div>
  );
}
