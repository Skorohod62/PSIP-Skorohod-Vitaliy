function names() {
    let s1 = "Скороход";
    let s2 = "Группа";

    console.log(s2.length);

    let s3 = s1.split('').reverse().join('');
    console.log(s3);

    let s4 = s2.toUpperCase();
    console.log(s4);
}
window.onload = names;
let fullUrl = window.location.href;


console.log(fullUrl);

function lol() {
    function myFunction(x, y, z) {
        var result = Math.log(Math.abs(y - Math.sqrt(Math.abs(x)))) * (x - y / (z + x * x / 4));
        return result;
    }
    let x = prompt("Введите х");
    let y = prompt("Введитте у");
    let z = prompt("Введите z");

    document.write(myFunction(x, y, z)); 
}