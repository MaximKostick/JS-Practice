// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку

const FILESIZE = 820;

const GIGABYTE = 1024

let userMemoryGigabyte = +prompt('Укажите объем флешки в Гб', '8');

let userMemoryMegabyte = userMemoryGigabyte * GIGABYTE;

let userFileNumber = userMemoryMegabyte / FILESIZE

alert(`На вашей флешке помещается ${userFileNumber} файлов размером в 820 Мб`);