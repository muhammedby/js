let kilo = Number(prompt("Kilonuzu Giriniz."));

let boy = Number(prompt("Boyunuzu Metre Cinsinden Giriniz."));

let sonuc = kilo/(boy**2);


if(sonuc<18.5){
    alert("İdeal Kilonun Altındasınız, Beden Kitle Endeksi Sonucunuz: " + sonuc);
}else if(18.5<=sonuc<=24.9){
    alert("İdeal Kilodasınız, Beden Kitle Endeksi Sonucunuz: " + sonuc);
}else if(25<=sonuc<=29.9){
    alert("İdeal Kilonun Üstündesiniz, Beden Kitle Endeksi Sonucunuz: " + sonuc);
}else if(30<=sonuc<=39.9){
    alert("İdeal Kilonun Çok Üstündesiniz (Obez), Beden Kitle Endeksi Sonucunuz: " + sonuc);
}else if(40<=sonuc){
    alert("İdeal Kilonun Çok Çok Üstündesiniz (Morbid Obez), Beden Kitle Endeksi Sonucunuz:" + sonuc);
}
