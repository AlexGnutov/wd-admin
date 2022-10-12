export const minutesToTimeString = (number) => {
    let hours = (number - number % 60) / 60;
    let minutes = number % 60;

    hours = hours < 10 ? '0' + hours : '' + hours;
    minutes = minutes < 10 ? '0' + minutes : '' + minutes;

    return `${hours}:${minutes}`;
};

//TODO: write suitable test
export const timeStringToMinutes = (string) => {
    const pair = string.split(':');
    return +pair[0] * 60 + +pair[1];
}