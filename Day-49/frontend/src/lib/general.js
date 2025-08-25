const currentDate = () => {
  const date = new Date();
  return date.toLocaleDateString();
};

export default currentDate;
