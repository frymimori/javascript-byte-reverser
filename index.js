const avolittyByteReverser = function(a, b, c) {
	let d = [
		[],
		true
	];
	let e = b.bytePrefix;
	let f = c.bytePrefix;
	let g = c.dataType;
	let h = a.length;
	let i = b.byteLength;
	let j = b.bytesRadix;
	let k = c.byteLength;
	let l = c.bytesRadix;
	let m = h;
	let n = 0;

	if ((typeof k) == "undefined") {
		k = 0;
	}

	if ((typeof a) == "object") {
		
	} else {
		if (
			(typeof a) == "string" &&
			(typeof j) != "undefined"
		) {
			if (e & 1) {
				a = "0" + a;
				e++;
			}

			if ((typeof e) != "undefined") {
				let o = "";
				d[0] = a.substring(e.length).split(e);
				e = "";
				h = d[0].length;
				i = h;
				m = h;
				h >>= 1;

				while (h != n) {
					m--;
					e = parseInt(d[0][m], j).toString(l).padStart(k, "0");
					d[0][m] = parseInt(d[0][n], j).toString(l).padStart(k, "0");

					if (
						Number.isNaN(d[0][m]) == false &&
						Number.isNaN(e) == false
					) {
						d[0][m] = f + d[0][m];
						d[0][n] = f + e;
						n++;
					} else {
						d = [
							[],
							false
						];
						h = n;
					}
				}

				if (i & 1) {
					d[0][h] =  f + parseInt(d[0][h], j).toString(l).padStart(k, "0");
				}
			} else {
				if ((typeof i) != "undefined") {
					while (h > n) {
						m -= i;
						e = parseInt(a.substring(m, i), j).toString(l).padStart(k, "0");
						d[0][m] = f + parseInt(a.substring(n, i), j).toString(l).padStart(k, "0");
						d[0][n] = e;
						n += i;
					}
				} else {
					
				}
			}
		} else {
			d = [
				[],
				false
			];
		}
	}

	if (
		d[1] &&
		g == "string"
	) {
		d[0] = d[0].join("");
	}

	return d;
}

if ((typeof module) != 'undefined' && module.exports != void(0)) {
	module.exports = avolittyByteReverser;
}

const a = "0xab0xcd0xef";
const b = {
        "bytePrefix": "0x",
        "bytesRadix": 16
};
const c = {
        "byteLength": 8,
        "bytePrefix": "0b",
        "bytesRadix": 2,
        "dataType": "object"
};
const d = avolittyByteReverser(a, b, c);
console.log(d);
