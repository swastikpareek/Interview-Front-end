import React from 'react';
import EventForm from './event-form';
import {useSelector} from 'react-redux';
import ConditionalView from '../../component/ConditionalView';
import { useParams } from "react-router-dom";
import ShowEventFormData from './event-form-data';

export default function(props) {
  const { id } = useParams();
  const event = useSelector(state => state.events).filter(event => event.id === id)[0];
  const bookingForm = useSelector(state => state.form);
  const showData = useSelector(state => state.showData);

  return (
    <div>
      <h2 className="text-center mb-5"> { event.title } </h2>
      <p className="lead text-center mb-4"> Number of available seats: {event.seats} </p>
      <div className="card">
        <div className="card-body d-flex">
          <div className="border col ml-3 mr-3 d-flex align-items-center justify-content-center">
            <img alt={event.title} src={event.img} className="rounded-circle"/>
          </div>
          <div className="col pt-2 pb-2">
            <EventForm data={event}/>
          </div>
        </div>
      </div>
      <ConditionalView condition={showData}>
        <ShowEventFormData data={bookingForm}/>
       </ConditionalView>
    </div>
  );
}
