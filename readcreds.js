const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM8', { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
var result = [];
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{
  //console.log('got word from arduino:', data);
  if (data.includes("#")) {
      result = [];
      data.replace(/#/gi, "");
      data.replace(/$/gi, ""); 
      //console.log(data);
      console.log("RFID read");
      result.push(data);

  }
  if (data.includes("*")) {
      data.replace("*", "");
      data.replace("!", ""); 
      //console.log(data);
      result.push(data);
      console.log("PIN read");
      //result now contains rfid and pin code tuple
      console.log(result);
      result = [];
  }

});