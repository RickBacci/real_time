import '../styles/base.css';

import React from 'react';
import ScheduleTable        from './ScheduleTable.js';

let APPNAME = 'Real Time';

let URLS = [
  {
    rootUrl: 'http://localhost:8080/webpack-dev-server',
    schedulerUrl: '/scheduler/175',
    scheduleeUrl: '/schedulee/175'
  },
];

let TIMESLOTS = [
  {scheduleDate: '11/12/15', startTime: '1pm', endTime: '2pm', scheduled: true},
  {scheduleDate: '11/12/15', startTime: '2pm', endTime: '3pm', scheduled: false},
  {scheduleDate: '11/13/15', startTime: '2pm', endTime: '3pm', scheduled: true},
  {scheduleDate: '11/14/15', startTime: '3pm', endTime: '4pm', scheduled: false},
  {scheduleDate: '11/14/15', startTime: '4pm', endTime: '5pm', scheduled: true},
  {scheduleDate: '11/14/15', startTime: '5pm', endTime: '6pm', scheduled: false},
  {scheduleDate: '11/15/15', startTime: '4pm', endTime: '5pm', scheduled: false},
  {scheduleDate: '11/16/15', startTime: '5pm', endTime: '6pm', scheduled: false},
  {scheduleDate: '11/17/15', startTime: '1pm', endTime: '2pm', scheduled: false},
  {scheduleDate: '11/17/15', startTime: '6pm', endTime: '7pm', scheduled: false},
  {scheduleDate: '11/18/15', startTime: '7pm', endTime: '8pm', scheduled: true},
];


React.render(
  <ScheduleTable name={ APPNAME } timeSlots={ TIMESLOTS } urls={ URLS }/>,
    document.getElementById('content')
);
