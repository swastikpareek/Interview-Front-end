import React from 'react';
import EventForm from './event-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShowEventFormData from './event-form-data';
import ConditionalView from '../../component/ConditionalView';
import Loader from '../../component/Loader';

export default function (props) {
  const { id } = useParams();
  const bookingForm = useSelector(state => state.form);
  const showData = useSelector(state => state.showData);
  const event = useSelector(state => state.events).filter(event => event.id === id)[0];
  const isEventLoading = useSelector((state) => state.isEventLoading);

  return (
    <div>
      <Loader condition={isEventLoading} />

      <ConditionalView condition={event !== undefined}>
        <h2 className='text-center mb-5'> {event ? event.title : ''} </h2>
        <p className='lead text-center mb-4'> Number of available seats: {event ? event.seats : ''} </p>
        <div className='card mb-3'>
          <div className='card-body d-flex flex-column flex-md-row'>
            <div className='col mb-3 mb-md-0'>
              <div className='border d-flex align-items-center justify-content-center align-self-start p-5'>
                <img alt={event ? event.title : ''} src={event ? event.img : ''} className='rounded-circle' />
              </div>
            </div>
            <div className='col'>
              <EventForm data={event} />
            </div>
          </div>
        </div>
        <ConditionalView condition={showData}>
          <ShowEventFormData data={bookingForm} />
        </ConditionalView>
      </ConditionalView>
    </div>
  );
}
