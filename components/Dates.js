export function formatDateDE(inputDate) {
  // Parse the input date
  const date = new Date(inputDate);

  // Array of month names abbreviated to 3 characters
  const months = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];

  // Extract day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Return the formatted date
  return `${day}. ${month} ${year}`;
}

export function formatDateEN(inputDate) {
  // Parse the input date
  const date = new Date(inputDate);

  // Array of month names abbreviated to 3 characters
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Return the formatted date
  return `${month} ${day}, ${year}`;
}
