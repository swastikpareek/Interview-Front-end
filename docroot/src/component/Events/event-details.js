import React, { useEffect } from 'react';
import EventForm from './event-form';
import { useSelector, useDispatch } from 'react-redux';
import ConditionalView from '../../component/ConditionalView';
import { useParams } from 'react-router-dom';
import ShowEventFormData from './event-form-data';
import { setLoadingState, setEventsData } from '../../actions/events';
import { EventsURL } from '../../constants/events';

export default function (props) {
  const { id } = useParams();
  const events = useSelector(state => state.events);
  const bookingForm = useSelector(state => state.form);
  const showData = useSelector(state => state.showData);
  const event = useSelector(state => state.events).filter(event => event.id === id)[0];
  const dispatch = useDispatch();
  const isEventLoading = useSelector((state) => state.isEventLoading);

  useEffect(() => {
    if (events.length === 0) {
      dispatch(setLoadingState(true));
      fetch(EventsURL)
        .then(data => {
          return data.json();
        })
        .then(data => {
          dispatch(setEventsData(data));
          dispatch(setLoadingState(false));
        })
        .catch(err => {
          let errorMessage = 'Error Occurred';

          if (err.message === 'Failed to fetch') {
            errorMessage = 'You need to have the server running for this. Run server using \'npm run api\' in a new terminal';
          }

          console.log(errorMessage);
          alert(errorMessage);
        });
    }
  }, [dispatch, events]);

  return (
    <div>
      <ConditionalView condition={isEventLoading}>
        <div className='d-flex flex-column w-100 align-items-center p-5'>
          <div className='spinner-grow' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </ConditionalView>

      <ConditionalView condition={event !== undefined}>
        <h2 className='text-center mb-5'> {event ? event.title : ''} </h2>
        <p className='lead text-center mb-4'> Number of available seats: {event ? event.seats : ''} </p>
        <div className='card'>
          <div className='card-body d-flex'>
            <div className='border col ml-3 mr-3 d-flex align-items-center justify-content-center'>
              <img alt={event ? event.title : ''} src={event ? event.img : ''} className='rounded-circle' />
            </div>
            <div className='col pt-2 pb-2'>
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
