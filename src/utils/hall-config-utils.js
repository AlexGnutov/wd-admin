// eslint-disable-next-line import/prefer-default-export
export const getHallSeatsData = (hall) => {
  if (!hall) {
    return {
      seats: [],
      rows: 0,
      seatsPerRow: 0,
    };
  }
  let seats;
  try {
    seats = JSON.parse(hall.seats);
  } catch (e) {
    seats = [];
  }
  const rows = seats.length;
  const seatsPerRow = rows > 0 ? seats[0].length : 0;
  return {
    seats,
    rows,
    seatsPerRow,
  };
};
