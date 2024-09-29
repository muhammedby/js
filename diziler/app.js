let os = ["linux","macOS","windows","BSD"];
// let sayac = 0;

// while (sayac<os.length){
//     alert(os[sayac]);
//     sayac++;
// }


for(let i = 0 ; i<os.length ; i++){
    console.log(os[i]);
}


os.forEach(function(kernel){
console.log(kernel);
});

// os.forEach(kernel => {
//     console.log(kernel);
// });

