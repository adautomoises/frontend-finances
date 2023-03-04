//Formato YYYY-MM-DD
export const formatDate = (date: string) => {
  let years;
  years = date.slice(0, 4);
  let months;
  months = date.slice(5, 7);
  let days;
  days = date.slice(8, 10);

  let formattedDate = days + "/" + months + "/" + years;
  return formattedDate;
};
