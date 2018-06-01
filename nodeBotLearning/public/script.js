const socket = io();
// const colorPicker = document.getElementById('color-picker');

// colorPicker.addEventListener('change', () => {
//   console.log({ color: colorPicker.value });
//   socket.emit('color change', { color: colorPicker.value });
// });



socket.on('weather updated', (data) => {
  console.log(data);
  const temperature = document.getElementById('temperature');
const pressure = document.getElementById('pressure');
const relativeHumidity = document.getElementById('relativeHumidity');

})