function luas() {
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const HasilLuas = (alas * tinggi) / 2;
    const LangkahLuas = `L = 1/2 x A x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${HasilLuas}`;
    document.getElementById('LangkahLuas').innerHTML = LangkahLuas;
}

function keliling() {
    const A = document.getElementById('A').value;
    const B = document.getElementById('B').value;
    const C = document.getElementById('C').value;
    const HasilKeliling = parseInt(A, 10) + parseInt(B, 10) + parseInt(C, 10);
    const LangkahKeliling = `K = A + B + C<br>K = ${A} + ${B} + ${C}<br>K = ${HasilKeliling}`;
    document.getElementById('LangkahKeliling').innerHTML = LangkahKeliling;
}

function ResetLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('LangkahLuas').innerHTML = '';
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('LangkahKeliling').innerHTML = '';
    document.getElementById('HasilLuas').style.display = 'none';
    document.getElementById('HasilKeliling').style.display = 'none';
}

function ResetKeliling() {
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('LangkahKeliling').innerHTML = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('LangkahLuas').innerHTML = '';
    document.getElementById('HasilLuas').style.display = 'none';
    document.getElementById('HasilKeliling').style.display = 'none';
}

function scrollToId(id) {
    var element = document.getElementById(id);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById('HasilLuas').style.display = 'none';
    document.getElementById('HasilKeliling').style.display = 'none';
}

function HitungLuas() {
    luas();
    document.getElementById('HasilLuas').style.display = 'block';
}

function HitungKeliling() {
    keliling();
    document.getElementById('HasilKeliling').style.display = 'block';
}