function luas() {
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const HasilLuas = (alas * tinggi) / 2;
    document.getElementById('luas').textContent = HasilLuas;
}

function keliling() {
    const A = document.getElementById('A').value;
    const B = document.getElementById('B').value;
    const C = document.getElementById('C').value;
    const HasilKeliling = parseInt(A, 10) + parseInt(B, 10) + parseInt(C, 10);
    document.getElementById('keliling').textContent = HasilKeliling;
}

function ResetLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').textContent = '';
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('keliling').textContent = '';
    document.getElementById('HasilLuas').style.display = 'none';
    document.getElementById('HasilKeliling').style.display = 'none';
}

function ResetKeliling() {
    document.getElementById('A').value = '';
    document.getElementById('B').value = '';
    document.getElementById('C').value = '';
    document.getElementById('keliling').textContent = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').textContent = '';
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