export default function formatDate(inputDate) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sepetember',
    'October',
    'November',
    'December',
  ];

  const parts = inputDate.split('-');
  const year = parts[0];
  const month = months[parseInt(parts[1]) - 1];
  const day = parts[2];

  return `${month} ${parseInt(day)}, ${year}`;
}
