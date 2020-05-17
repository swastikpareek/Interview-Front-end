import React, { useEffect } from 'react';
import EventsListing from './event-listing';
import EventsDetails from './event-details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingState, setEventsData } from '../../actions/events';
import { EventsURL } from '../../constants/events';

export default function (props) {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

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
