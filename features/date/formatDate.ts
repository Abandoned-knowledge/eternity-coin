function formatDate(date: Date): string {
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDay = days[date.getDay()];
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${weekDay}, ${day} ${month} ${year}`;
}

export function formatDateForDB(date: Date): string {
  let dd: string | number = date.getDate();
  let mm: string | number = date.getMonth() + 1;
  const yy = date.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  return `${yy}-${mm}-${dd}`;
}

export default formatDate;
