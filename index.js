const changeBills = (cash) => {
  const ten = Math.floor(cash / 10);
  const five = Math.floor(Math.floor(cash % 10) / 5);
  const two = Math.floor(Math.floor(cash % 5) / 2);
  return {
    two,
    five,
    ten,
  };
};

console.log("changeBills(17).ten :", changeBills(17).ten);
console.log("changeBills(17).five :", changeBills(17).five);
console.log("changeBills(17).two :", changeBills(17).two);
console.log("changeBills(6).ten :", changeBills(6).ten);
console.log("changeBills(6).five :", changeBills(6).five);
console.log("changeBills(6).two :", changeBills(6).two);
