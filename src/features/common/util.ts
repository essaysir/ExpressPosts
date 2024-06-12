export default function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // "MM/DD/YYYY, hh:mm AM/PM" 형식을 "YYYY-MM-DD hh:mm AM/PM" 형식으로 변환
  const [month, day, yearAndTime] = formattedDate.split('/');
  const [year, time] = yearAndTime.split(', ');
  return `${year}-${month}-${day} ${time}`;
}
