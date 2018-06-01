// var five = require('johnny-five');
// var Tessel = require('tessel-io');
// var board = new five.Board({
//   io: new Tessel(),
// });

// board.on('ready', () => {
//   const led = new five.Led('a0');

//   const button = new five.Button({
//     pin: 'a2',
//     isPullup: true,
//   });

//   button.on('press', () => led.on());
//   button.on('release', () => led.off());
// });
// Our code here!
var five = require('johnny-five');
var Tessel = require('tessel-io');
var board = new five.Board({
  io: new Tessel(),
});

board.on('ready', () => {
  const lcd = new five.LCD({
    pins: ['a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
  });

  lcd.cursor(0, 0).print('Hello');
  lcd.cursor(1, 0).print('47 :heart:');
});
