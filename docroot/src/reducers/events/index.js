import { ErrorMessages, UpdateNewAttendees } from '../../constants/events';

export const EventsListFactory = (initialState) => (state=initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
     return {
        ...state,
        searchText: action.text
      };
    case 'UPDATE_TEXT':
      return _updateText(action, state);
    case 'UPDATE_ATTENDEE':
      return _updateAttendee(action, state);
    case 'VALIDATE_INPUT':
      return _validateInput(action, state);
    case 'RESET_FORM':
      return _resetForm(state);
    case 'LOG_DATA':
      return _logData(action, state);
    case 'UPDATE_SEATS':
      return _updateSeats(action, state);
    default:
      return state;
  }
}

function _updateText({key, value}, state) {
  const form = state.form.map((formItem) => {
    formItem.opts.value = formItem.key === key ?  value : formItem.opts.value;

    return formItem;
  });

  state.form = form;
  return state;
}

function _updateAttendee({val}, state) {
  const newAttendees = parseInt(val, 10) - 1;

  // Add new form items
  state.form = UpdateNewAttendees(state.form, newAttendees);

  // Remove extra form items
  state.form = state.form.filter((item) => {
    if(!item.key.includes('attendee_no_')) {
      return true;
    }

    const attendeeNumber = parseInt(item.key.replace('attendee_no_', ''), 10);

    return attendeeNumber <= (newAttendees + 1);
  });

  return state;
}


function _validateInput({key, value, seats}, state) {
  state.form = state.form.map((formItem) => {
    if(formItem.key === key) {
      switch(formItem.validation_type) {
        case 'name':
          if (value === '') {
            formItem.errorMessage = ErrorMessages.name.empty;
          } else if(!(/^[a-zA-Z\s]*$/i.test(value))) {
            formItem.errorMessage = ErrorMessages.name.invalid;
          } else {
            formItem.errorMessage = '';
          }
          break;
        case 'email':
          if (value === '') {
            formItem.errorMessage = ErrorMessages.email.empty;
          }
          else if(!(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i.test(value))) {
            formItem.errorMessage = ErrorMessages.email.invalid;
          }
          else {
            formItem.errorMessage = '';
          }
        break;
        case 'other':
          if (value === '') {
            formItem.errorMessage = ErrorMessages.seats.empty + formItem.title;
          } else if(!(/^[a-zA-Z\s]*$/i.test(value))) {
            formItem.errorMessage = ErrorMessages.other.invalid;
          }
          else {
            formItem.errorMessage = '';
          }
        break;

        case 'seats':
          if (value === '') {
            formItem.errorMessage = ErrorMessages.seats.empty;
          } else if(seats < value) {
            formItem.errorMessage = ErrorMessages.seats.invalid;
          }
          else {
            formItem.errorMessage = '';
          }
          break;

          default:
        }
    }

    return formItem;
  });

  return state;
}

function _resetForm(state) {
  state.form = state.form.map((formItem) => {
    formItem.opts.value = formItem.key === 'attendee_seats' ? 2 : '' ;
    formItem.errorMessage = '';

    return formItem;
  });

  state.form = UpdateNewAttendees(state.form, 2);

  return state;
}

function _logData({show}, state) {
  state.showData = show;

  if(show) {
    console.group("Form Data");
    state.form.forEach((formItem) => {
      console.log(`${formItem.title} : ${formItem.opts.value}`);
    });
    console.groupEnd();
  }
  return state;
}

function _updateSeats({eventId, seats}, state) {
  state.events = state.events.map((ev) => ev.id === eventId ? {...ev, seats: parseInt(ev.seats,10) - parseInt(seats,10)} : {...ev} );

  return state;
}
