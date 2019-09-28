function phepcong() {
    let nhap1 = Number(document.getElementById("nhap1").value);
    let nhap2 =Number(document.getElementById("nhap2").value);
    let result = 0;
    result = nhap1 + nhap2;
    document.getElementById("play").innerHTML = result;

    
}
function pheptru() {
    let nhap1 = Number(document.getElementById("nhap1").value);
    let nhap2 =Number(document.getElementById("nhap2").value);
    result = nhap1 - nhap2;
    document.getElementById("play").innerHTML = result;

}
function phepnhan() {
    let nhap1 = Number(document.getElementById("nhap1").value);
    let nhap2 =Number(document.getElementById("nhap2").value);
    result = nhap1 * nhap2;

    document.getElementById("play").innerHTML = result;
}
function phepchia() {
    let nhap1 = Number(document.getElementById("nhap1").value);
    let nhap2 =Number(document.getElementById("nhap2").value);
    let result = 0;
    result = nhap1 / nhap2;
    document.getElementById("play").innerHTML = result;

}