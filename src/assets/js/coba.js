// Variable
// 1. Var = Old School
var x = 0
x = 15

console.log(x)

// Variable modern
// 1. let
let z = 10
z = 5
// let 0 // tidak boleh pake angka
let z0 = 10
let _a = "test"
let $a = 10
// let a* = 10
let Z = 15
let isCarBroken = true

console.log(z)
// 2. const
const COLOR_RED = "red";
const y = 5
// y = 10

// Type Data
// primitive
let text = "lorem ipsum" //string
let number = 0 // number
let kosong = null
let undef  //undefined
let undef2 = undefined
let isMorning = true // boolean
let isEvening = false

// non primitive
//1. object
const zenix = {
    brand: 'Toyota',
    mesin: 'Hybrid',
    warna: 'Black',
    spec: { // nested
        mesin: '2.0l',
        rangka: 'TNGA'
    }
}

console.log(zenix)
console.log(zenix.mesin)
zenix.mesin = 'diesel'
console.log(zenix)
// zenix = {
//     brand: 'Toyota',
//     mesin: 'Hybrid',
// }
//2. array
const mobilToyota = 
 ['Gr yaris', 'Reborn', 'Supra']

console.log(mobilToyota[2])
mobilToyota[1] = "Innova Reborn"
console.log(mobilToyota[1])

const mobil = [
    {
        nama: 'GR Yaris',
        mesin: 'Hybrid',
        warna: 'Black',
    },
    {
        nama: 'Innova Zenix',
        mesin: 'Hybrid',
        warna: 'Black',
    }
]

// Operator =-*&%/!
//1. Aritmatika
const tambah = 1 + 1;
const kali = 2 * 2;
const hasilBagi = 2 % 2;
const pangkat = 2**2;
const pembagian = 4 / 2;

//2. String concatenation // menggabungkan 2 string
const a = 'a'
const b = 'b'
const newText = a + b;
console.log(newText)
console.log('10' + ['car','etst'])

//3. Assignment
let seribu = 1000
seribu = seribu + 500
seribu += 500
console.log(seribu)

//4. logical >,<,<=,>=,==,===,!==,!=
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
console.log(result);

//sama dengan / equality
console.log(1 === 1) // true 
console.log('1' == 1) // true
console.log('1' === 1) // false

//tidak sama dengan / not equal
console.log(1 !== 1) 
console.log('2' != 2)

