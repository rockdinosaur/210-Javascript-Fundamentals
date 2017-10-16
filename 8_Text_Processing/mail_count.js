function mailCount(emailData) {
  var emailMessages = emailData.split(`##||##`);
  var emailParts = emailMessages.map(function(email) { return email.split(`#/#`); });
  var emailDates = emailParts.map(function(email) { return email[2].split(' ')[1]; });

  var sortedDates = emailDates.map(function(date) { return new Date(date); }).sort(function(date1, date2) {
    if (date1 > date2) {
      return 1;
    } else if (date1 < date2) {
      return -1;
    } else {
      return 0;
    }
  }).map(function(date) { return date.toDateString(); });

  console.log('Email Count: ' + String(emailMessages.length));
  console.log('Date Range: ' + sortedDates[0] + ' - ' + sortedDates[sortedDates.length - 1]);
}

mailCount(emailData);
