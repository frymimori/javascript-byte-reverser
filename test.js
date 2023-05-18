const avolittyByteReverser = require('./index.js');
let a = avolittyByteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "object"});
console.log("Input: avolittyByteReverser(\"123456789abcdef\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 2, \"bytePrefix\": \"0x\", \"bytesRadix\": 16, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0xef\", \"0xcd\", \"0xab\", \"0x89\", \"0x67\", \"0x45\", \"0x23\", \"0x01" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("123456789abcd", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"123456789abcd\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 2, \"bytePrefix\": \"0x\", \"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0xcd0xab0x890x670x450x230x01" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("0xab0xcd0xef", {"bytePrefix": "0x", "bytesRadix": 16}, {"byteMinimumLength": 8, "bytePrefix": "0b", "bytesRadix": 2, "dataType": "object"});
console.log("Input: avolittyByteReverser(\"0xab0xcd0xef\", {\"bytePrefix\": \"0x\", \"bytesRadix\": 16}, {\"byteMinimumLength\": 8, \"bytePrefix\": \"0b\", \"bytesRadix\": 2, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0b11101111\", \"0b11001101\", \"0b10101011" && a[1] == true) ? "Yes" : "No") + "\n");

