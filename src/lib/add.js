const sum = (...numbers) => {
  return numbers.reduce((acc, val) => acc + val, 0);
};

export { sum };
