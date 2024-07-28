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

export default formatDate;
