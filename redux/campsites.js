import * as ActionTypes from './ActionTypes';

export const campsites = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            return {...state, isLoading:false,errMess: null, comments: action.payload}
        
    

        default:
            return state;
      }
};