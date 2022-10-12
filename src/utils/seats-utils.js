// Seats designations
// 'd' - disabled
// 's' - standard
// 'v' - vip
// 'sl' - selected
// 't' - taken

export const generateSeatsArray = (rows, seatsPerRow, fill = 's') => {
    return Array(rows).fill([]).map(row => Array(seatsPerRow).fill(fill));
}

export const generateSeatsArrayJSON = (rows, seatsPerRow, fill = 's') => {
    return JSON.stringify(generateSeatsArray(rows, seatsPerRow, fill));
}

const SEAT_TYPES = ['s', 'v', 'd'];
export const changeSeatType = (rowId, colId, stateSeats) => {
    const seats = JSON.parse(JSON.stringify(stateSeats));

    const currentTypeIdx = SEAT_TYPES.findIndex(type => type === seats[rowId][colId]);
    const nextValue = SEAT_TYPES[currentTypeIdx + 1];

    if (nextValue) {
        seats[rowId][colId] = nextValue;
    } else {
        seats[rowId][colId] = SEAT_TYPES[0];
    }

    return seats;
}