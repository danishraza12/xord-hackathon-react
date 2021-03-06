import React, { useState } from 'react';
import {
  Navbar,
  Header,
  Cards,
  Chart,
  Income,
  AppointmentActivity,
} from '../../components';

const Dashboard = () => {
  const [term, setTerm] = useState('');

  // Allow searching within the grid
  function search(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(term) > -1 ||
        row.email.toLowerCase().indexOf(term) > -1 ||
        row.date.toLowerCase().indexOf(term) > -1 ||
        row.visitTime.toLowerCase().indexOf(term) > -1 ||
        row.doctor.toLowerCase().indexOf(term) > -1 ||
        row.conditions.toLowerCase().indexOf(term) > -1
    );
  }

  return (
    <>
      <Header term={term} setTerm={setTerm} />
      <Navbar />
      <Cards />
      <Chart />
      <Income />
      <AppointmentActivity search={search} />
    </>
  );
};

export default Dashboard;
