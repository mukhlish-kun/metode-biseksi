function fungsi(x) {
    var hasil = Math.pow(x, 3) - 3 * Math.pow(x, 2) - x + 3;
    return hasil;
}

function proses() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var tol = parseFloat(document.getElementById('tol').value);
    var rowTbl = "";
    //validasi input
    if (tol==0) {
        document.getElementById('error').innerHTML = '* Toleransi harus lebih dari 0';
        document.getElementById('tol').classList.add('border-danger');
        document.getElementById('isi-table').innerHTML = "";
        return;
    }
    if (fungsi(a) * fungsi(b) > 0) {
        document.getElementById('error').innerHTML = '* Tidak ada akar antara ' + a + ' dan ' + b;
        document.getElementById('a').classList.add('border-danger');
        document.getElementById('b').classList.add('border-danger');
        document.getElementById('isi-table').innerHTML = "";
        return;
    } else {
        document.getElementById('a').classList.remove('border-danger');
        document.getElementById('b').classList.remove('border-danger');
        document.getElementById('error').innerHTML = "";

        var i = 1;
        var x;

        while (Math.abs(b - a) / 2 > tol) {
            x = (a + b) / 2;
            rowTbl += `
            <tr>
                <td>${i}</td>
                <td>${a}</td>
                <td>${b}</td>
                <td>${x}</td>
                <td>${fungsi(x)}</td>
                <td>${fungsi(b)}</td>
                <td>${fungsi(a)}</td>
                <td>${Math.abs(b - a)}</td>
            </tr>
            `;

            if (fungsi(x) * fungsi(a) < 0) {
                b = x;
            } else {
                a = x;
            }

            if (x == 0.0) {
                break;
            }
            i++;

        }

    }

    document.getElementById('isi-table').innerHTML = rowTbl;
}