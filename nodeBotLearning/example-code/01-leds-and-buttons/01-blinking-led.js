// Our code here!
const five = require('johnny-five');
const Tessel = require('tessel-io');
const board = new five.board({
    io: new Tessel()
});


board.on('ready', () => {
    const led = new five.Led('a0');
    led.blink(470);
})