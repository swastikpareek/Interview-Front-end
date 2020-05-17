import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateText, updateAttendee, validateInput, resetForm, logData, updateSeats } from '../../actions/events';
import ConditionalView from '../../component/ConditionalView';
import EventFormElement from './event-form-element';

export default function EventForm ({ data }) {
  const bookingForm = useSelector(state => state.form);
  const showData = useSelector(state => state.showData);
  const dispatch = useDispatch();

  const reset = (event) => {
    dispatch(resetForm());
  };

  const validate = (event) => {
    // Explicit condition check for the attendee seats
    if (event.target.max && parseInt(event.target.max, 10) < parseInt(event.target.value, 10)) {
      alert(`Can't place value greater than ${event.target.max}`);

      return;
    }

    dispatch(updateText(event.target.dataset.key, event.target.value));

    if (event.target.dataset.key === 'attendee_seats') {
      let selectedSeats = event.target.value;

      dispatch(validateInput(event.target.dataset.key, event.target.value, data.seats));

      if (bookingForm.filter((formItem) => formItem.key === 'attendee_seats')[0].errorMessage) {
        selectedSeats = 1;
      }

      dispatch(updateAttendee(selectedSeats));
    } else {
      dispatch(validateInput(event.target.dataset.key, event.target.value));
    }
  };

  const handleSubmit = (event) => {
    let isValid = true;

    // Validate each input
    bookingForm.forEach((formItem) => {
      dispatch(validateInput(formItem.key, formItem.opts.value));
    });

    setTimeout(function () {
      isValid = bookingForm.filter((formItem) => formItem.errorMessage !== '').length === 0;
      if (isValid) {
        dispatch(logData(true));
        dispatch(updateSeats(data.id, bookingForm.filter((formItem) => formItem.key === 'attendee_seats')[0].opts.value));
      }
    });

    event.preventDefault();
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        {bookingForm.map((formItem) => {
          return (
            <EventFormElement key={formItem.key} item={formItem} onChange={(event) => validate(event)} />
          );
        })}
        <div className='d-flex justify-content-around mt-4'>
          <button disabled={showData ? 'disabled' : ''} className='btn btn-primary' type='submit'> Submit </button>
          <ConditionalView condition={showData}>
            <button disabled className='btn btn-secondary'> Cancel </button>
          </ConditionalView>
          <ConditionalView condition={!showData}>
            <Link onClick={reset} to='/' className='btn btn-secondary'> Cancel </Link>
          </ConditionalView>
        </div>
      </form>
    </div>
  );
}
