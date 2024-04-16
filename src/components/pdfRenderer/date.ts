const MONTH = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export function formatDate({ dateObj }: { dateObj: Date }) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  return MONTH[month] + " " + date + ", " + year;
}
