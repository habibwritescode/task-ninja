// import { Dates } from './types';

type Date = Date | null;

export const formatToDate = (date: string | null) => {
  if (date) {
    return new Intl.DateTimeFormat("en-US").format(new Date(date));
  }
  return null;
};

//   formatToTime: (date: string) => {
//     const dateFormat = new Intl.DateTimeFormat('en-US', {
//       timeStyle: 'short',
//     });
//     return dateFormat.format(new Date(date));
//   },

export const formatFilterDate = (dateString: Dates) => {
  if (!dateString) {
    return "";
  }
  const newDate = new Date(dateString);
  return newDate?.toLocaleDateString("en-GB").split("/").join("-");
};

export const formatToLongDate = (dateString: string) => {
  if (!dateString) {
    return "";
  }
  const newDate = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = newDate.toLocaleDateString("en-GB", options);
  const [day, month, year] = formattedDate.split(" ");
  return `${day} ${month}, ${year}`;
};
