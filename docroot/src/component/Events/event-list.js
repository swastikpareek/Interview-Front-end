import React, { useEffect } from 'react';
import Event from './event';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingState, setEventsData } from '../../actions/events';
import ConditionalView from '../../component/ConditionalView';
import { EventsURL } from '../../constants/events';

export default function (props) {
  const { list } = props;
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const events = useSelector((state) => state.events);
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
    <div className='row'>
      {list
        .filter((item) => searchText.length > 0 ? item.title.indexOf(searchText) > -1 : true)
        .map((item) => {
          return (
            <Event data={item} key={item.id} />
          );
        })}
      <ConditionalView condition={isEventLoading}>
        <div className='d-flex flex-column w-100 align-items-center p-5'>
          <div className='spinner-grow' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </ConditionalView>
      <ConditionalView condition={(list.filter((item) => searchText.length > 0 ? item.title.indexOf(searchText) > -1 : true).length === 0) && !isEventLoading}>
        <p className='lead  pt-5 ml-auto mr-auto'> No results!</p>
      </ConditionalView>
    </div>
  );
}
