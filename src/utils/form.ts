export const convertEventToForm = (event: any) => {
  const form: any = {};
  Object.keys(event.target.elements).forEach((key: any) => {
    if (isNaN(key)) {
      form[key] = event.target.elements[key].value;
    }
  });

  return form;
};
