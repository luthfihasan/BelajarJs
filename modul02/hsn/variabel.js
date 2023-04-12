//variabel var
var nama ="Hasan";
var nama ="Husein";
var nama ="Hasanah";

console.log(nama);

// jika variabelnya ada yang sama proteknya kecil (tampil yang terakhir yang diatasnya ditimpa)
/* output
Dina
*/

//variabel let
let lastName = "Hasan";
let lastName1 ="Husein";

console.log(lastName);

// jika variabelnya ada yang sama akan di protek (tidak muncul)
/* output
Dini
*/ 

//variabel const
const z = 100;
console.log(z);
z = 200
console.log(z);
/* TypeError: Assigment to constant variabel. */