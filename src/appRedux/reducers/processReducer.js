import {processList} from 'scenes/main/process/processList/ProcessList.constants';

// import { PROCESS } from 'appRedux/actionsType';
const initialState = {
  // TODO
  processList: processList,
};

const processReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default processReducer;
