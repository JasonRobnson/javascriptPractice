// Our code here!
const five = require('johnny-five');
const Tessel = require('tessel-io');
const board = new five.Board({
    io: new Tessel()
});


board.on('ready', () => {
    const led = new five.Led.RGB({
        red: 'a5',
        green: 'a6',
        blue: 'b5',

    });


    let index = 0;
    const colors = ['red', 'blue', 'green'];

    board.loop(500, () => {
        led.color(colors[index++% colors.length]);
    });
    // led.blink(470);'

    // const button = new five.Button({
    //     pin: 'a2',
    //     isPullup: true, 
    });
    // button.on('press', () => console.log('pressed'));
    // button.on('release', () => console.log('released'))
    //Press Button
    // button.on('press', () => led.on());
    // button.on('release', () => led.off());