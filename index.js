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
	let k = c.byteMinimumLength;
	let l = c.bytesRadix;
	let m = h;
	let n = 0;

	if ((typeof k) == "undefined") {
		k = 0;
	}

	if ((typeof j) != "undefined") {
		if ((typeof a) == "object") {
			let o = i;

			if ((typeof o) == "undefined") {
				o = 0;
			}

			i = h;
			m = h;
			h >>= 1;

			while (h != n) {
				m--;
				e = parseInt(a[m].substring(o), j).toString(l).padStart(k, "0");
				a[m] = parseInt(a[n].substring(o), j).toString(l).padStart(k, "0");

				if (
					Number.isNaN(a[m]) == false &&
					Number.isNaN(e) == false
				) {
					d[0][m] = f + a[m];
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
				d[0][h] =  f + parseInt(a[h].substring(o), j).toString(l).padStart(k, "0");
			}
		} else {
			if ((typeof a) == "string") {
				if ((typeof e) != "undefined") {
					d[0] = a.substring(e.length).split(e);
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
						if (h & 1) {
							a = "0" + a;
							h++;
						}

						let o = h >> 1;
						let p = 0;
						const q = o >> 1;
						h = o;

						while (p != q) {
							o--;
							e = parseInt(a.substring(m, m - i), j).toString(l).padStart(k, "0");
							m -= i;
							d[0][o] = parseInt(a.substring(n, i + n), j).toString(l).padStart(k, "0");

							if (
								Number.isNaN(d[0][o]) == false &&
								Number.isNaN(e) == false
							) {
								d[0][o] = f + d[0][o];
								d[0][p] = f + e;
								n += i;
								p++;
							} else {
								d = [
									[],
									false
								];
								h = n;
							}
						}

						if (h & 1) {
							d[0][p] =  f + parseInt(a.substring(n, i + n), j).toString(l).padStart(k, "0");
						}
					} else {
						d = [
							[],
							false
						];
					}
				}
			} else {
				d = [
					[],
					false
				];
			}
		}
	} else {
		d = [
			[],
			false
		];
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

const a = [
	"0xb",
	"0xcd",
	"0xef",
	"0xde",
	"0xdc"
];
//const a = "0xb0xcd0xef0xde0xdc";
const b = {
//	"byteLength": 2,
        "bytePrefix": "0x",
        "bytesRadix": 16
};
const c = {
        "byteMinimumLength": 8,
        "bytePrefix": "0x",
        "bytesRadix": 16,
        "dataType": "object"
};
const d = avolittyByteReverser(a, b, c);
console.log(d);
