let sayi = prompt("Lütfen Bir Sayı Giriniz.");
let toplam = 0;

for(let i=0; i<sayi.length; i++){
let rakam = sayi.charAt(i);
toplam+=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("Armstrong Sayısıdır.")
}else{
    alert("Armstrong Sayısı Değildir.")
}