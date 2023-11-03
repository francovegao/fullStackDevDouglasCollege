import React from 'react';

// Footer Component
function Footer() {
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const timestamp = currentDate.getHours() +":"+ currentDate.getMinutes() +":"+ currentDate.getSeconds();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear +"-"+ timestamp + " " +timeZone;
  
    return (
      <footer>
          <p>Created by Oliver Franco - at: {dateString}</p>
      </footer>
    );
  }

export default Footer;