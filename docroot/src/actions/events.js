export const search = (text) => {
  return {
     type: 'SEARCH',
     text
  }
}

export const updateText = (key, value) => {
  return {
     type: 'UPDATE_TEXT',
     key,
     value
  }
}

export const updateAttendee = (val) => {
  return {
    type: 'UPDATE_ATTENDEE',
    val
  }
}

export const validateInput = (key, value, seats) => {
  return {
     type: 'VALIDATE_INPUT',
     key,
     value,
     seats
  }
}

export const resetForm = () => {
  return {
     type: 'RESET_FORM'
  }
}

export const logData = (show) => {
  return {
     type: 'LOG_DATA',
     show
  }
}

export const updateSeats = (eventId, seats) => {
  return {
     type: 'UPDATE_SEATS',
     eventId,
     seats
  }
}

export const setLoadingState = (loading) => {
  return {
     type: 'LOADING_STATE',
     loading
  }
}

export const setEventsData = (data) => {
  return {
     type: 'UPDATE_EVENTS',
     data
  }
}
