function formatDate(date: Date): string {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
