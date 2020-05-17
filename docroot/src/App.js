import React from 'react';
import EventsApp from './component/Events';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EventsListFactory } from './reducers/events';
import { EventsInitialState, FormatEventsData } from './constants/events';

const EventsStore = createStore(EventsListFactory(FormatEventsData(EventsInitialState)));

export default function App() {
  return (
    <div>
     <Provider store={EventsStore} >
       <EventsApp />
     </Provider>
    </div>
  );
}
