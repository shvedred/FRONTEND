const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));
