import { MONTHS } from "./constants";

export const formatDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const monthString = MONTHS[month];
  let minute = dateObj.getMinutes();
  let hour = dateObj.getHours();
  let suffix = "PM";
  
  if (hour > 12) {
    hour = hour - 12;
    suffix = "PM";
  } else if (hour === 0) {
    hour = 12;
    suffix = "AM";
  } else {
    suffix = "AM";
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  return `${monthString} ${day} ${year} ${hour}:${minute} ${suffix}`;
};

export const generateUniqueId = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}