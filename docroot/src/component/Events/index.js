import React from 'react';
import EventsListing from './event-listing';
import EventsDetails from './event-details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function (props) {
  return (
    <div className='container mt-4'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <EventsListing />
          </Route>
          <Route path='/user/:id'>
            <EventsDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
