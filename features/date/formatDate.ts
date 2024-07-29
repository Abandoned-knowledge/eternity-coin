function formatDate(date: Date, style?: "yyyy-mm"): string {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const weekDay = days[date.getDay()];
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  if (style == "yyyy-mm") {
    return `${year} ${month}`;
  } else return `${weekDay}, ${day} ${month} ${year}`;
}

export function changeDataByMonth(currentMonth: number) {
  let start: string | Date = new Date();
  let end: string | Date = new Date();

  start.setMonth(currentMonth);
  start.setDate(1);
  start = formatDateForDB(start);

  end.setMonth(currentMonth + 1);
  end.setDate(1);
  end = formatDateForDB(end);

  return { start, end };
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
