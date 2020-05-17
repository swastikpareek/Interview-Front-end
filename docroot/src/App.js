import React from 'react';
import EventsApp from './apps/Events';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { EventsListFactory } from './reducers/events';
import { EventsInitialState, UpdateNewAttendees } from './constants/events';

const EventsStore = createStore(EventsListFactory(formatEventsData(EventsInitialState)));

export default function App() {
  return (
    <div>
     <Provider store={EventsStore} >
       <EventsApp />
     </Provider>
    </div>
  );
}

function formatEventsData(EventsInitialState) {
  let { form } = EventsInitialState;
  const newAttendees = parseInt(form.filter((formItem) => formItem.key === 'attendee_seats')[0].opts.value, 10);

  form = UpdateNewAttendees(form, newAttendees);

  return {
    ...EventsInitialState,
    form
   }
}
