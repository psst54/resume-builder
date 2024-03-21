export function getRelativeTime(date: Date) {
  const current = new Date();
  const target = new Date(date);

  const differenceMinute = Math.floor(
    (current.getTime() - target.getTime()) / 1000 / 60
  );
  if (differenceMinute < 1) {
    return "방금 전";
  }
  if (differenceMinute < 60) {
    return `${differenceMinute} 분 전`;
  }

  const differenceHour = Math.floor(differenceMinute / 60);
  if (differenceHour < 24) {
    return `${differenceHour} 시간 전`;
  }

  const differenceDate = Math.floor(differenceMinute / 60 / 24);
  if (differenceDate < 365) {
    return `${differenceDate} 일 전`;
  }

  return `${Math.floor(differenceDate / 365)} 년 전`;
}
