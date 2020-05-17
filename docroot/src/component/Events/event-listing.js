import React from 'react';
import EventsSearch from './event-search';
import EventsList from './event-list';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../actions/events';

export default function (props) {
  const events = useSelector(state => state.events);
  const dispatcher = useDispatch();

  const searchHandler = (text) => {
    dispatcher(search(text));
  };

  return (
    <div>
      <h1 className='text-center mb-5'> Events App </h1>
      <EventsSearch onSearch={searchHandler} />
      <EventsList list={events} />
    </div>
  );
}
