import moment from "moment";

export const dateFormat = (value: any) => {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm");
  }
};
