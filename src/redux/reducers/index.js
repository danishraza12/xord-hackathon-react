import { combineReducers } from 'redux';

const chartReducer = () => {
  return [
    {
      x_name: '2021-1',
      'Patients 2019': 130,
      'Patients 2020': 200,
    },
    {
      x_name: '2021-2',
      'Patients 2019': 240,
      'Patients 2020': 170,
    },
    {
      x_name: '2020-3',
      'Patients 2019': 80,
      'Patients 2020': 150,
    },
    {
      x_name: '2020-4',
      'Patients 2019': 120,
      'Patients 2020': 20,
    },
    {
      x_name: '2020-5',
      'Patients 2019': 180,
      'Patients 2020': 290,
    },
    {
      x_name: '2020-6',
      'Patients 2019': 280,
      'Patients 2020': 170,
    },
    {
      x_name: '2020-7',
      'Patients 2019': 50,
      'Patients 2020': 220,
    },
    {
      x_name: '2020-8',
      'Patients 2019': 150,
      'Patients 2020': 260,
    },
    {
      x_name: '2020-9',
      'Patients 2019': 90,
      'Patients 2020': 120,
    },
    {
      x_name: '2020-10',
      'Patients 2019': 50,
      'Patients 2020': 170,
    },
    {
      x_name: '2020-11',
      'Patients 2019': 190,
      'Patients 2020': 210,
    },
    {
      x_name: '2020-12',
      'Patients 2019': 70,
      'Patients 2020': 130,
    },
  ];
};

const cardsReducer = () => {
  return [
    {
      title: 'Appointments',
      value: '213',
    },
    {
      title: 'New Patients',
      value: '104',
    },
    {
      title: 'Operations',
      value: '24',
    },
    {
      title: 'Hospital Earning',
      value: '$12,174',
    },
  ];
};

export default combineReducers({
  data: chartReducer,
  cardsInfo: cardsReducer,
});
