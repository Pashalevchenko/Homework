
let name = prompt ('Введите Ваше имя: ');
let surename = prompt ('Введите Вашу фамилию: ');
let perfomans = prompt ('Введите выступление: ');
let theater = prompt ('Введите театр: ');
let sector = prompt ('Введите сектор: ');
let row = prompt ('Введите ряд: ');
let place = prompt ('Введите место: ');
let time = prompt ('Введите время: ');

let ticket = ('')

ticket += '\nИмя: ' + name;
ticket += '\nФамилия: ' + surename;
ticket += '\nВыстуление: ' + perfomans;
ticket += '\nТеатр: ' + theater;
ticket += '\nСектор: ' + sector;
ticket += '\nРяд: ' + row;
ticket += '\nМесто: ' + place;
ticket += '\nВремя: ' + time;


console.log (ticket)