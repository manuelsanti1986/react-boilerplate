import {
    EARTHQUAKE_CATALOGS_QUERY,
    EARTHQUAKE_DATA_QUERY,
} from "../types/map-action-types";

export const getEarthquakesData= () => async (dispatch) => {
    await fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02")
        .then(
            response => response.json(),
            reason => Promise.reject(reason)
        ).then(
            data => dispatch({
                type: EARTHQUAKE_DATA_QUERY,
                payload: data
            }),
            reason => dispatch({
                type: EARTHQUAKE_DATA_QUERY,
                payload: reason
            })
        );
};

export const getEarthquakesCatalog = () => async (dispatch) => {
    await fetch("https://earthquake.usgs.gov/fdsnws/event/1/catalogs")
        .then(
            response => response.json(),
            reason => Promise.reject(reason)
        ).then(
            data => dispatch({
                type: EARTHQUAKE_CATALOGS_QUERY,
                payload: data
            }),
            reason => dispatch({
                type: EARTHQUAKE_CATALOGS_QUERY,
                payload: reason
            })
        );
};
