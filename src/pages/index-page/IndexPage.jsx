import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHallsThunk } from '../../store/thunks/halls-thunks';
import { loadFilmsThunk } from '../../store/thunks/films-thunks';
import { loadSeancesThunk } from '../../store/thunks/seances-thunks';

import Header from '../../components/common/header/Header';
import ManageHalls from '../../components/conf-steps/manage-halls/ManageHalls';
import HallsConfig from '../../components/conf-steps/halls-config/HallsConfig';
import HallsPrices from '../../components/conf-steps/halls-prices/HallsPrices';
import SeancesSchedule from '../../components/conf-steps/seances-schedule/SeancesSchedule';
import SalesStart from '../../components/conf-steps/sales-start/SalesStart';
import AddHallPopup from '../../components/popups/AddHallPopup';
import DeleteHallPopup from '../../components/popups/DeleteHallPopup';
import AddFilmPopup from '../../components/popups/AddFilmPopup';
import AddSeancePopup from '../../components/popups/AddSeancePopup';
import DeleteFilmPopup from '../../components/popups/DeleteFilmPopup';
import DeleteSeancePopup from '../../components/popups/DeleteSeancePopup';

function IndexPage() {
  const { auth, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && token) {
      dispatch(loadHallsThunk());
      dispatch(loadFilmsThunk());
      dispatch(loadSeancesThunk());
    }
  }, [auth, token, dispatch]);

  return (
    <>
      <Header />
      <main className="conf-steps">
        <ManageHalls />
        <HallsConfig />
        <HallsPrices />
        <SeancesSchedule />
        <SalesStart />
      </main>

      <AddHallPopup />
      <DeleteHallPopup />

      <AddFilmPopup />
      <DeleteFilmPopup />

      <AddSeancePopup />
      <DeleteSeancePopup />
    </>
  );
}

export default IndexPage;
