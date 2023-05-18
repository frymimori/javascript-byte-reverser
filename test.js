const avolittyByteReverser = require('./index.js');
let a = avolittyByteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "object"});
console.log("Input: avolittyByteReverser(\"123456789abcdef\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 2, \"bytePrefix\": \"0x\", \"bytesRadix\": 16, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0xef\", \"0xcd\", \"0xab\", \"0x89\", \"0x67\", \"0x45\", \"0x23\", \"0x01" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"123456789abcdef\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 2, \"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "efcdab8967452301" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"123456789abcdef\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "efcdab896745231" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("123456789abcd", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"123456789abcd\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 2, \"bytePrefix\": \"0x\", \"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0xcd0xab0x890x670x450x230x01" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("0xab0xcd0xef", {"bytePrefix": "0x", "bytesRadix": 16}, {"byteMinimumLength": 8, "bytePrefix": "0b", "bytesRadix": 2, "dataType": "object"});
console.log("Input: avolittyByteReverser(\"0xab0xcd0xef\", {\"bytePrefix\": \"0x\", \"bytesRadix\": 16}, {\"byteMinimumLength\": 8, \"bytePrefix\": \"0b\", \"bytesRadix\": 2, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0b11101111\", \"0b11001101\", \"0b10101011" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser(["ab", "cd", "ef"], {"bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser([\"ab\", \"cd\", \"ef\"], {\"bytesRadix\": 16}, {\"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "efcdab" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser(["ab"], {"bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser([\"ab\"], {\"bytesRadix\": 16}, {\"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "ab" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("ab", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"ab\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "ab" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("a", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"a\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "a" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("a", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 4, "bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"a\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 4, \"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "000a" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser("abc", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 4, "bytesRadix": 16, "dataType": "string"});
console.log("Input: avolittyByteReverser(\"abc\", {\"byteLength\": 2, \"bytesRadix\": 16}, {\"byteMinimumLength\": 4, \"bytesRadix\": 16, \"dataType\": \"string\"});");
console.log("Output: [\"" + a[0] + "\", " + a[1] + "]");
console.log("Passed: " + ((a[0] == "00bc000a" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser(["ab", "cd", "ef"], {"bytesRadix": 16}, {"bytesRadix": 10, "dataType": "object"});
console.log("Input: avolittyByteReverser([\"ab\", \"cd\", \"ef\"], {\"bytesRadix\": 16}, {\"bytesRadix\": 10, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "239\", \"205\", \"171" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser(["ab", "cd"], {"bytesRadix": 16}, {"bytesRadix": 10, "dataType": "object"});
console.log("Input: avolittyByteReverser([\"ab\", \"cd\"], {\"bytesRadix\": 16}, {\"bytesRadix\": 10, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "205\", \"171" && a[1] == true) ? "Yes" : "No") + "\n");
a = avolittyByteReverser(["0xab", "0xcd", "0xef"], {"bytePrefix": "0x", "bytesRadix": 16}, {"byteMinimumLength": 10, "bytesRadix": 10, "dataType": "object"});
console.log("Input: avolittyByteReverser([\"0xab\", \"0xcd\", \"0xef\"], {\"bytePrefix\": \"0x\", \"bytesRadix\": 16}, {\"byteMinimumLength\": 10, \"bytesRadix\": 10, \"dataType\": \"object\"});");
a[0] = a[0].join("\", \"");
console.log("Output: [[\"" + a[0] + "\"], " + a[1] + "]");
console.log("Passed: " + ((a[0] == "0000000239\", \"0000000205\", \"0000000171" && a[1] == true) ? "Yes" : "No"));
