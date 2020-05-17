export const EventsURL = 'http://127.0.0.1:3001/events';

export const ErrorMessages = {
  name: {
    empty: 'Please enter your name',
    invalid: 'Only letters and spaces are allowed'
  },
  email: {
    empty: 'Please enter your email',
    invalid: 'Invalid email'
  },
  seats: {
    empty: 'Please enter the number of seats',
    invalid: 'Number of seats selected is more than available seats'
  },
  other: {
    empty: 'Please enter the name of ',
    invalid: 'Only letters and spaces are allowed'
  }
};

export const EventsInitialState = {
  events: [],
  isEventLoading: false,
  searchText: '',
  showData: false,
  form: [{
    key: 'attendee_1',
    title: 'Name',
    validation_type: 'name',
    errorMessage: '',
    opts: {
      value: '',
      type: 'text',
      name: 'main_attendee'
    }
  },
  {
    key: 'attendee_email',
    title: 'Email',
    validation_type: 'email',
    errorMessage: '',
    opts: {
      value: '',
      type: 'text',
      name: 'attendee_email'
    }
  },
  {
    key: 'attendee_phone',
    title: 'Phone Number',
    validation_type: 'phone',
    errorMessage: '',
    opts: {
      value: '',
      type: 'phone',
      name: 'atttendee_phone'
    }
  },
  {
    key: 'attendee_seats',
    title: 'Number of seats',
    validation_type: 'seats',
    errorMessage: '',
    opts: {
      value: '2',
      min: '2',
      max: '6',
      type: 'number',
      name: 'atttendee_seats'
    }
  }]
};

export const UpdateNewAttendees = (form, newAttendees) => {
  [...Array(newAttendees)].forEach((v, i) => {
    const key = i + 2;

    // If this attendee doesn't exist.
    if (form.filter(item => item.key === `attendee_no_${key}`).length === 0) {
      form = [...form, {
        key: `attendee_no_${key}`,
        title: `Attendee #${key}`,
        validation_type: 'other',
        errorMessage: '',
        opts: {
          value: '',
          type: 'text',
          name: `attendee_no_${key}`
        }
      }];
    }
  });

  return form;
};

export const FormatEventsData = (EventsInitialState) => {
  let { form } = EventsInitialState;
  const newAttendees = parseInt(form.filter((formItem) => formItem.key === 'attendee_seats')[0].opts.value, 10);

  form = UpdateNewAttendees(form, newAttendees);

  return {
    ...EventsInitialState,
    form
  };
};
