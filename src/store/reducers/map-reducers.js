import {
    EARTHQUAKE_CATALOGS_QUERY,
    EARTHQUAKE_DATA_QUERY,
} from "../types/map-action-types";

const initialState = {
    catalogs: {},
    earthquakeData: {},
};

export default function(state=initialState, action) {
    switch(action.type) {
        case EARTHQUAKE_CATALOGS_QUERY:
            state = {
                ...state,
                catalogs: action.payload
            }
            break;
        case EARTHQUAKE_DATA_QUERY:
            state = {
                ...state,
                earthquakeData: action.payload
            }
            break;
    }
    return state;
}
