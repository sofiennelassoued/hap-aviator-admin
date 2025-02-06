const getDaysInMonth = (month: number, year: number) => {
  const last = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: last }, (_, i) => i + 1);
};

export { getDaysInMonth };
