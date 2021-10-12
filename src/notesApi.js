//This is a file to simulate calls to APIs

//This function get the data from the localStorage.
export const getData = () => {
  //data gets the information save in the localstorage as dataNotes, is also apply JSON.pase
  //to transform the data to JSON format, it is the most common response from APIs.
  const data = JSON.parse(localStorage.getItem('dataNotes'));
  //response will contain the data from the call, or will return an empty array instead of null.
  const response = data ? data : [];
  return response;
};

//This function makes the action of insert new data to the local storage.
export const insertData = (values) => {
  //here is insert the data to the localStorage as dataNotes.
  localStorage.setItem('dataNotes', JSON.stringify(values));
};

export const updateData = (values) => {
  console.log(values);
  localStorage.removeItem('dataNotes');
  localStorage.setItem('dataNotes', JSON.stringify(values));
};

//This function makes the action of delete data of the localStorage
export const deleteData = (values) => {
  //This is step is the same as insert, but here is insert new data without the values that is delete.
  localStorage.setItem('dataNotes', JSON.stringify(values));
};
