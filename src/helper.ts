import { MyModalValues } from "./models";

export const monthNames = [
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

export const extractDates = function (str: string) {
  const patterns = [
    /\d{1}\/\d{1}\/\d{4}/,
    /\d{1}\/\d{2}\/\d{4}/,
    /\d{2}\/\d{1}\/\d{4}/,
    /\d{2}\/\d{2}\/\d{4}/,
    /\d{1}\.\d{1}\.\d{4}/,
    /\d{1}\.\d{2}\.\d{4}/,
    /\d{2}\.\d{1}\.\d{4}/,
    /\d{2}\.\d{2}\.\d{4}/,
  ];

  if (str === "") return "";
  else {
    const arrDates = str
      .split(" ")
      .map((string) =>
        patterns
          .map((pattern) => string.match(pattern))
          .filter((date) => date !== null)
      )
      .filter((el) => el.length !== 0)
      .map((date) => (date.length === 1 ? date[0]![0] : date[1]![0]))
      .join(", ");

    return arrDates;
  }
};

export const dateCreated = function (monthNames: string[]) {
  const date = new Date();
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const icon = function (value: string) {
  if (value === "Task") {
    return "uil-shopping-cart-alt";
  } else if (value === "Random Thought") {
    return "uil-cog";
  } else if (value === "Idea") {
    return "uil-lightbulb";
  } else if (value === "Quote") {
    return "uil-google-hangouts-alt";
  }
};

export const editProps: MyModalValues = {
  valueTitle: "",
  valueCategory: "",
  valueContent: "",
};
