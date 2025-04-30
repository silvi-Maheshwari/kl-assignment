// src/utils/transformData.js
const transformData = (data) => {
    return {
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      age: parseInt(data.age),
    };
  };
  
  export default transformData;
  