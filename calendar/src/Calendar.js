import React, { useState, useEffect } from 'react';

import './Calendar.css';

const daysInWeek = 7;
const calendarRows = 6;

const getMonthLength = (year, month) => new Date(year, month + 1, 0).getDate();
const getPrevMonthDays = (year, month) => new Date(year, month, 1).getDay() === 0 ? 6 : new Date(year, month, 1).getDay() - 1;
const getNextMonthDays = (year, month) => calendarRows * daysInWeek - (getMonthLength(year, month) + getPrevMonthDays(year, month));

const addZero = number => number < 10 ? `0${number}` : number.toString();

const buildCalendarTable = (year, month) => {
  let calendarTable = [];
  
  for(let i = getMonthLength(year, month - 1); i > getMonthLength(year, month - 1) - getPrevMonthDays(year, month); i--) {
    calendarTable = [addZero(i), ...calendarTable];
  }
  for(let i = 1; i <= getMonthLength(year, month); i++) {
    calendarTable = [...calendarTable, addZero(i)];
  }
  for(let i = 1; i <= getNextMonthDays(year, month); i++) {
    calendarTable = [...calendarTable, addZero(i)];
  }
  return calendarTable;
}

const splitByRows = arr => {
  let prev = 0;
  let splittedArray = [];
  for (let i = 7; i <= 42; i += 7) 
  {    
    splittedArray = [...splittedArray, [arr.slice(prev, i)]]
    prev = i;    
  }
  return splittedArray;
}

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [dateTable, setDateTable] = useState(splitByRows(buildCalendarTable(date.getFullYear(), date.getMonth())));

  const crossOutBegin = getPrevMonthDays(date.getFullYear(), date.getMonth());
  const crossOutEnd = getNextMonthDays(date.getFullYear(), date.getMonth());

  useEffect(() => {
    setDateTable(splitByRows(buildCalendarTable(date.getFullYear(), date.getMonth())));
  }, [date])  

  const changeDate = action => {
    if (action === '-') {
      setDate(new Date(date.setMonth(date.getMonth() - 1)));
    }
    if (action === '+') {
      setDate(new Date(date.setMonth(date.getMonth() + 1)));
    }
  }

  const year = date.getFullYear();
  const month = date.toLocaleDateString('default', { month: 'long' });

  return (
    <section>
      <h1>{}</h1>
      <div className="calendar-container">
        <h2>{year}</h2>
        <div className="month-navigation">
          <button 
            type="button"
            onClick={() => {
              changeDate('-');
            }}
          >&lt;</button>
          <h3>{month}</h3>
          <button 
            type="button"
            onClick={() => {
              changeDate('+');
            }}
          >&gt;</button>
        </div>
        <div className="calendar-table">
          <table>
            <thead>
              <tr>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <CalendarTable
                table={dateTable}
                crossOutBegin={crossOutBegin}
                crossOutEnd={crossOutEnd}
              />
            </tbody>            
          </table>
        </div>
      </div>
    </section>
  )
}

// Some Spaghetti
const CalendarTable = ({table, crossOutBegin, crossOutEnd}) => {
  console.log('crossout>>> ', crossOutBegin)
  console.log('crossoutEnd >>> ', crossOutEnd)
  console.log('table >>> ', table);

  const fadeBlockBegin = (outindex, index, crossOutBegin) => {
    return outindex === 0 && index < crossOutBegin;
  }

  const fadeBlockEnd = (outindex, index, crossOutEnd) => {
    if (crossOutEnd <= 7) {
      return outindex === 5 && index + 1 > 7 - crossOutEnd
    }
    if (crossOutEnd > 7) {
      return outindex === 5 || (outindex === 4 && index + 1 > 7 - (crossOutEnd - 7))
    }
  }

  return table.map((oneRow, outindex) => {    
    console.log(oneRow[0]);
    return (        
      <tr key={outindex}>
        {oneRow[0].map((item, index) => {
          console.log('something >>> ', `${outindex} ${index}`)
          return (fadeBlockBegin(outindex, index, crossOutBegin) || fadeBlockEnd(outindex, index, crossOutEnd) ? <td key={`${outindex}${index}`} className="fade">{item}</td> 
            : <td key={`${outindex}${index}`} className="">{item}</td>)
        })}
      </tr>
    )
  });
}

export default Calendar;