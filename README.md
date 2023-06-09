## JavaScript Byte Reverser

#### Description
Create reverse-endian byte sequences with a fast and unique byte order reversal algorithm.

- All MDN modern web browsers supported
- Browser JavaScript and Node.js support
- Considers C programming constraints relevant to JavaScript
- Custom radices for input bytes and output bytes supported between `2` and `36`
- Fast byte order reversal speed
- Minified and readable code with single-letter variable names
- No dependencies
- Objects and strings supported for both input and output data
- Optimized for efficient memory usage
- Option to set byte length in input data strings instead of delimiting code unit prefixes
- Option to set byte minimum length in output data
- Option to set byte prefixes in both input and output data

#### Usage
Clone the repository in the current directory with the command `git`.

``` console
git clone https://github.com/frymimori/javascript-byte-reverser.git
```

Navigate to the cloned repository's root directory with the command `cd`.

``` console
cd javascript-byte-reverser
```

The following example uses code from the file [test.js](https://github.com/frymimori/javascript-byte-reverser/blob/main/test.js) to reverse byte order.

``` javascript
const byteReverser = require("./index.js");
const a = "0xab0xcd0xef";
const b = {
        "bytePrefix": "0x",
        "bytesRadix": 16
};
const c = {
        "byteMinimumLength": 8,
        "bytePrefix": "0b",
        "bytesRadix": 2,
        "dataType": "object"
};
const d = byteReverser(a, b, c);
console.log(d);
```

The function `byteReverser()` outputs a sequence of bytes in reverse order.

The return value variable `d` is an `object` with 2 values.

The first value is an `object` or `string` with reversed bytes based on the output configuration defined in the variable `c`.

The second value is a `boolean` defined as the following error statuses.

- `true` Success.
- `false` Error from invalid reversal parameters or malformed input bytes.

The first argument variable `a` is an `object` or a `string` defined as the sequence of bytes to reverse.

The second argument variable `b` is an `object` defined as the following options.

``` json
{
  "byteLength": 2,
  "bytePrefix": "0x",
  "bytesRadix": 16
}
```

The optional property `"byteLength"` is a `number` defined as the length for each numeral representation of bytes in the input data.

This is only required to parse `string` input data without the property `"bytePrefix"`.

The optional property `"bytePrefix"` is a `string` defined as a custom delimiting prefix for each numeral representation of bytes in the input data.

This is only required if the variable `a` is a `string` without the property `"bytePrefix"`.

The required property `"bytesRadix"` is a `number` defined as a numeral system base value between `2` and `36`.

``` json
{
  "byteMinimumLength": 8,
  "bytePrefix": "0b",
  "bytesRadix": 2,
  "dataType": "object"
}
```

The optional property `"byteMinimumLength"` is a `number` defined as the minimum length for each numeral representation of bytes in the output data.

Each numeral representation of bytes with a string length lower than this value is left-padded with `"0"` characters.

The optional property `"bytePrefix"` is a `string` defined as a custom delimiting prefix for each numeral representation of bytes in the output data.

The required property `"bytesRadix"` is a `number` defined as a numeral system base value between `2` and `36`.

The required property `"dataType"` is a `string` and the value is `"object"` or `"string"`.

The command `node` can process a list of defined test inputs from the file [test.js](https://github.com/frymimori/javascript-byte-reverser/blob/main/test.js).

``` console
node test
```

The output is a list of test inputs with corresponding outputs from the function `byteReverser()`.

``` javascript
Input: byteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "object"});
Output: [["0xef", "0xcd", "0xab", "0x89", "0x67", "0x45", "0x23", "0x01"], true]
Passed: Yes

Input: byteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytesRadix": 16, "dataType": "string"});
Output: ["efcdab8967452301", true]
Passed: Yes

Input: byteReverser("123456789abcdef", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
Output: ["efcdab896745231", true]
Passed: Yes

Input: byteReverser("123456789abcd", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 2, "bytePrefix": "0x", "bytesRadix": 16, "dataType": "string"});
Output: ["0xcd0xab0x890x670x450x230x01", true]
Passed: Yes

Input: byteReverser("0xab0xcd0xef", {"bytePrefix": "0x", "bytesRadix": 16}, {"byteMinimumLength": 8, "bytePrefix": "0b", "bytesRadix": 2, "dataType": "object"});
Output: [["0b11101111", "0b11001101", "0b10101011"], true]
Passed: Yes

Input: byteReverser(["ab", "cd", "ef"], {"bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
Output: ["efcdab", true]
Passed: Yes

Input: byteReverser(["ab"], {"bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
Output: ["ab", true]
Passed: Yes

Input: byteReverser("ab", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
Output: ["ab", true]
Passed: Yes

Input: byteReverser("a", {"byteLength": 2, "bytesRadix": 16}, {"bytesRadix": 16, "dataType": "string"});
Output: ["a", true]
Passed: Yes

Input: byteReverser("a", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 4, "bytesRadix": 16, "dataType": "string"});
Output: ["000a", true]
Passed: Yes

Input: byteReverser("abc", {"byteLength": 2, "bytesRadix": 16}, {"byteMinimumLength": 4, "bytesRadix": 16, "dataType": "string"});
Output: ["00bc000a", true]
Passed: Yes

Input: byteReverser(["ab", "cd", "ef"], {"bytesRadix": 16}, {"bytesRadix": 10, "dataType": "object"});
Output: [["239", "205", "171"], true]
Passed: Yes

Input: byteReverser(["ab", "cd"], {"bytesRadix": 16}, {"bytesRadix": 10, "dataType": "object"});
Output: [["205", "171"], true]
Passed: Yes

Input: byteReverser(["0xab", "0xcd", "0xef"], {"bytePrefix": "0x", "bytesRadix": 16}, {"byteMinimumLength": 10, "bytesRadix": 10, "dataType": "object"});
Output: [["0000000239", "0000000205", "0000000171"], true]
Passed: Yes
```
