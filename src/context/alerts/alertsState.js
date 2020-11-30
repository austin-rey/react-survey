import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertsContext from './alertsContext';
import AlertsReducer from './alertsReducer';

import { SET_ALERT, REMOVE_ALERT } from './types';

const AlertsState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  //~~~~~~~~~~ACTIONS~~~~~~~~~~

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertsContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};

export default AlertsState;
