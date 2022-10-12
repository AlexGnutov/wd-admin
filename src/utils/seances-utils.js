import {store} from "../store/store";
import {timeStringToMinutes} from "./time-utils";

export const calcSeanceBoxWidth = (duration) => {
    return '' + Math.round((duration / 1440) * 100) + '%';
}

export const calcSeanceBoxPosition = (startTime) => {
    return '' + Math.round((startTime / 1440) * 100) + '%';
}

export const checkAvailableTime = (startTimeString, hallData, filmData) => {
    const busyTimes = getHallBusyTimes(hallData.id);
    const startTime = timeStringToMinutes(startTimeString);
    const stopTime = startTime + filmData.duration;

    const aliasing = busyTimes.filter(([start, stop]) => {
        return ( (startTime >= start && startTime <= stop) || (stopTime >= start && stopTime <= stop) );
    })
    return !aliasing[0];
}

export const getHallBusyTimes = (hallId) => {
    const seances = store.getState().seances.seancesList;
    const hallSeances = seances.filter(s => s['hallId'] === hallId);
    const films = store.getState().films.filmsList;

    return hallSeances.map((seance) => {
        const filmDuration = films.find(f => f.id === seance['filmId'])?.duration;
        const stopTime = seance.startTime + filmDuration;
        return [ seance.startTime, stopTime ];
    });
}