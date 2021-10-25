import { combineReducers } from 'redux';
import { Lesie, Robert, Jane, Jenny, Ronald } from '../../static';

const chartReducer = () => {
  return [
    {
      x_name: '',
      'Patients 2019': 0,
      'Patients 2020': 0,
    },
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

const incomeReducer = () => {
  return [
    [
      {
        x_name: '',
        income: '',
      },
      {
        x_name: '1 July',
        income: 20000,
      },
      {
        x_name: '8 July',
        income: 50000,
      },
      {
        x_name: '16 July',
        income: 40000,
      },
      {
        x_name: '24 July',
        income: 90000,
      },
      {
        x_name: '31 July',
        income: 65000,
      },
    ],
    [
      {
        x_name: '',
        income: '',
      },
      {
        x_name: '25 July',
        income: 90000,
      },
      {
        x_name: '26 July',
        income: 50000,
      },
      {
        x_name: '27 July',
        income: 65000,
      },
      {
        x_name: '28 July',
        income: 85000,
      },
      {
        x_name: '29 July',
        income: 65000,
      },
      {
        x_name: '30 July',
        income: 75000,
      },
      {
        x_name: '31 July',
        income: 35000,
      },
    ],
  ];
};

const incomeCardsReducer = () => {
  return [
    {
      title: '$100,000',
      legend: 'Income in current month',
      stroke: 'blue',
      dataKey: 'x_name',
    },
    {
      title: '$25,000',
      legend: 'Income in current week',
      stroke: 'yellow',
      dataKey: 'x_name',
    },
  ];
};

const appointmentRowsReducer = () => {
  return [
    {
      id: 1,
      name: 'Lesie Alexander',
      avatar: Lesie,
      email: 'lesie.alexander@example.com',
      date: '10/10/2020',
      visitTime: '09:15-09:45',
      doctor: 'Dr. Jacob Jones',
      conditions: 'Mumps Stage ll',
    },
    {
      id: 2,
      name: 'Ronald Richards',
      avatar: Ronald,
      email: 'ronald.richards@example.com',
      date: '10/12/2020',
      visitTime: '12:00-12:45',
      doctor: 'Dr. Theresa Webb',
      conditions: 'Depression',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      avatar: Jane,
      email: 'jane.cooper@example.com',
      date: '10/13/2020',
      visitTime: '02:15-02:45',
      doctor: 'Dr. Jacob Jones',
      conditions: 'Arthritis',
    },
    {
      id: 4,
      name: 'Robert Fox',
      avatar: Robert,
      email: 'robert.fox@example.com',
      date: '10/14/2020',
      visitTime: '01:15-01:45',
      doctor: 'Dr. Arlene MacCoy',
      conditions: 'Fracture',
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      avatar: Jenny,
      email: 'jenny.wilson@example.com',
      date: '10/15/2020',
      visitTime: '12:15-12:45',
      doctor: 'Dr. Esther Howard',
      conditions: 'Depression',
    },
  ];
};

const appointmentPageReducer = () => {
  return [
    {
      id: 1,
      name: 'Lesie Alexander',
      avatar: Lesie,
      email: 'lesie.alexander@example.com',
      date: '10/10/2020',
      visitTime: '09:15-09:45',
      doctor: 'Dr. Jacob Jones',
      conditions: 'Mumps Stage ll',
    },
    {
      id: 2,
      name: 'Ronald Richards',
      avatar: Ronald,
      email: 'ronald.richards@example.com',
      date: '10/12/2020',
      visitTime: '12:00-12:45',
      doctor: 'Dr. Theresa Webb',
      conditions: 'Depression',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      avatar: Jane,
      email: 'jane.cooper@example.com',
      date: '10/13/2020',
      visitTime: '02:15-02:45',
      doctor: 'Dr. Jacob Jones',
      conditions: 'Arthritis',
    },
    {
      id: 4,
      name: 'Robert Fox',
      avatar: Robert,
      email: 'robert.fox@example.com',
      date: '10/14/2020',
      visitTime: '01:15-01:45',
      doctor: 'Dr. Arlene MacCoy',
      conditions: 'Fracture',
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      avatar: Jenny,
      email: 'jenny.wilson@example.com',
      date: '10/15/2020',
      visitTime: '12:15-12:45',
      doctor: 'Dr. Esther Howard',
      conditions: 'Depression',
    },
    {
      id: 6,
      name: 'Marshall Cook',
      avatar: Robert,
      email: 'marshall.cook@example.com',
      date: '10/16/2020',
      visitTime: '01:15-01:45',
      doctor: 'Dr. Esther Howard',
      conditions: 'Depression',
    },
    {
      id: 7,
      name: 'Stephanie Cook',
      avatar: Jane,
      email: 'stephanie.cook@example.com',
      date: '10/17/2020',
      visitTime: '02:15-02:45',
      doctor: 'Dr. Jacob Jones',
      conditions: 'Cough',
    },
    {
      id: 8,
      name: 'Marion James',
      avatar: Ronald,
      email: 'marion.james@example.com',
      date: '10/18/2020',
      visitTime: '03:15-03:45',
      doctor: 'Dr. Arthur McCoy',
      conditions: 'Depression',
    },
    {
      id: 9,
      name: 'Teresa Holland',
      avatar: Jenny,
      email: 'teresa.holland@example.com',
      date: '10/19/2020',
      visitTime: '04:15-04:45',
      doctor: 'Dr. Esther Howard',
      conditions: 'Depression',
    },
    {
      id: 10,
      name: 'Zachary Marshall',
      avatar: Lesie,
      email: 'zachary.marshall@example.com',
      date: '10/20/2020',
      visitTime: '11:15-11:45',
      doctor: 'Dr. Esther Howard',
      conditions: 'Cough',
    },
  ];
};

export default combineReducers({
  data: chartReducer,
  cardsInfo: cardsReducer,
  incomeCard: incomeReducer,
  incomeData: incomeCardsReducer,
  appointmentRows: appointmentRowsReducer,
  appointmentPage: appointmentPageReducer,
});
