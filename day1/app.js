// ? Document write ile çıktı verme

document.writeln("Hello World <br>"); // ? line (ln) alt satıra geç
document.writeln("Batuhan Bayram");   // ? <br> alt satıra geç

// ? console ile çıktı verme

console.log("Batuhan Bayram");
// console.clear(); // ? konsolu temizler

let a=486
let b=533

console.log("İki Sayının Toplamı :" ,a+b);
// console.clear();

// ? Alert (Uyarı) popup ile çıktı verme

// console.log(window);   


alert("a ve b olmak üzere iki sayımız olsun. a=486 ve b=533 ise a ve b'yi toplayacak olursak sonuç: " + (a+b));

console.error("Hata!");
console.warn("Hata!");

/*
                  ? Bilgilendirme
                  ! Uyarı
                  Todo Önemli
                  *Dikkat Çekme

*/

// ?var: function scope,  left/const: block scope
// ?let değişken, const sabit

const user = {
username: "batu",
password: "1923"
}

user.username= "batuhanbayram";

console.log(user);

// == eşittir
// != eşit değildir
// ?null = boş


/*
*   string: "" (tırnak)
*   number: rakam
*   Boolean: comsole.log(5<8)
*   Null: boş
*   ndefined: let a; (tanımsız)
*   object: let batuk = {
*       isim: "batuk"
*       soyisim: "bayram"
*   }
*   console.log(batuk)
*   function: let func = function(){

*   console.log("Merhaba")
*   }
*   func()
*/

let not = 15

if(not>50){
console.log("Geçtiniz, notunuz: " + not);
}
else{
console.log("Kaldınız, notunuz: " + not);
}


let vize1 = Number(prompt("Vize 1 Notunuzu Giriniz."));
let vize2 = Number(prompt("Vize 2 Notunuzu Giriniz."));
let final = Number(prompt("Final Notunuzu Giriniz."));

let ort = vize1*0.3 + vize2*0.3 + final*0.4

if(ort>50){
alert("Dersten Geçtiniz Tebrikler :) " + "Notunuz: " + ort);

}else{
alert("Dersten Kaldınız, Geçmiş Olsun :( " + "Notunuz: " + ort);
}