import React from 'react';
import ConditionalView from '../../component/ConditionalView';
import { Link } from 'react-router-dom';

export default function (props) {
  const { data } = props;

  return (
    <div className='col-md-6 col-lg-4 col-xl-3 pb-4'>
      <div className='card border'>
        <div className='card-body'>
          <h4 className='text-center mb-3'> {data.title} </h4>
          <div className='d-flex flex-column flex-sm-row'>
            <div className='p-3 border col'>
              <img alt={data.title} src={data.img} className='w-100 rounded-circle' />
            </div>
            <div className='col'>
              <div className='mb-2'> {data.date}</div>
              <div className='mb-2'> Seats Available: {data.seats} </div>
              <ConditionalView condition={data.seats === 0}>
                <div className='text-dark'> Sold Out! </div>
              </ConditionalView>
              <ConditionalView condition={data.seats > 0}>
                <Link to={`/user/${data.id}`} className='btn btn-dark'>Book Now</Link>
              </ConditionalView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
