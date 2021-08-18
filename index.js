function changeBills(cash) {
  if (cash >= 10) {
    let ten = Math.floor(cash / 10);
    let five =
      Math.floor(cash % 10) >= 5 ? Math.floor(Math.floor(cash % 10) / 5) : 0;
    let two =
      five >= 2 || five <= 1 ? Math.floor(Math.floor(cash % 10) % 2) : 0;
    return {
      two,
      five,
      ten,
    };
  } else if (cash < 10 && cash >= 5) {
    let ten = 0;
    let five = Math.floor(cash / 5);
    let two = five == 1 ? Math.floor(Math.floor(cash % 5) / 2) : 0;
    return {
      ten,
      five,
      two,
    };
  } else {
    let ten = 0;
    let five = 0;
    let two = Math.floor(cash / 2) != 0 ? Math.floor(cash / 2) : 0;
    return {
      ten,
      five,
      two,
    };
  }

  // code
  return {
    two,
    five,
    ten,
  };
}

console.log("changeBills(17).ten :", changeBills(17).ten);
console.log("changeBills(17).five :", changeBills(17).five);
console.log("changeBills(17).two :", changeBills(17).two);
console.log("changeBills(6).ten :", changeBills(6).ten);
console.log("changeBills(6).five :", changeBills(6).five);
console.log("changeBills(6).two :", changeBills(6).two);
