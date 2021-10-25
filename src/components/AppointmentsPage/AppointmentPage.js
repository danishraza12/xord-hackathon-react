import React, { useState } from 'react';
import { Navbar, Header, AppointmentPageList } from '../../components';

const AppointmentPage = () => {
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
      <AppointmentPageList search={search} />
    </>
  );
};

export default AppointmentPage;
