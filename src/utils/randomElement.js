function randomElement(...array) {
  if (array.length === 1) array = array[0];
  console.log(array);
  return array[Math.round(Math.random() * array.length)];
}
export default randomElement;
