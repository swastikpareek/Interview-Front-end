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
}

export const EventsInitialState = {
  events: [{
    "id": "event_id_1",
    "date": "23 May 2020",
    "title": "Go Crazy",
    "img": "https://i.picsum.photos/id/225/200/200.jpg",
    "seats":3
  },{
    "id": "event_id_2",
    "date": "23 May 2020",
    "title": "Beat the heat",
    "img": "https://i.picsum.photos/id/228/200/200.jpg",
    "seats":21
  },{
    "id": "event_id_3",
    "date": "23 May 2020",
    "title": "Runtastic",
    "img": "https://i.picsum.photos/id/227/200/200.jpg",
    "seats":0
  },{
    "id": "event_id_4",
    "date": "23 May 2020",
    "title": "Smile it away",
    "img": "https://i.picsum.photos/id/228/200/200.jpg",
    "seats":16
  },{
    "id": "event_id_5",
    "date": "23 May 2020",
    "title": "Drive it like anything",
    "img": "https://i.picsum.photos/id/229/200/200.jpg",
    "seats":23
  },{
    "id": "event_id_6",
    "date": "23 May 2020",
    "title": "Dance for life",
    "img": "https://i.picsum.photos/id/230/200/200.jpg",
    "seats":11
  },{
    "id": "event_id_7",
    "date": "23 May 2020",
    "title": "Fast and Furious",
    "img": "https://i.picsum.photos/id/231/200/200.jpg",
    "seats":0
  },{
    "id": "event_id_8",
    "date": "23 May 2020",
    "title": "Slow and steady",
    "img": "https://i.picsum.photos/id/232/200/200.jpg",
    "seats":19
  }  ],
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
}

export const UpdateNewAttendees = (form, newAttendees) => {
  [...Array(newAttendees)].forEach((v,i) => {
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
}
