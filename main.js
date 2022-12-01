// const str = `javascript html css
// ecmascript #JS pyton php_8 scriptoriom
// react typescript 4.6 406 4-6- 4\\6
// Регулярные выражения #methed script 
// #git  выполни мёрж java`;



// const reg = new RegExp('js', 'i');
// const reg2 = /js/i;

// console.log(reg2.test(str));

// const regexp1 = /\S+script/g;
// const regexp2 = /java\S+/g;

// const exec1 = regexp1.exec(str);
// const exec2 = regexp2.exec(str);

// const match1 = str.match(regexp1);
// const match2 = str.match(regexp2);

// находит первое совпадение
// const saerch1 = str.search(regexp1);
// const search2 = str.search(regexp2);

//разбивает строку на массив
// const split1 = str.split(regexp1);
// const split2 = str.split(regexp2);

//замена найденного совпадения на символы второго аргумента
// const replace1 = str.replace(regexp1, '$$$');
// const replace2 = str.replace(regexp2, '&&&');

// находит все переносы строк и все пробелы
// const regexp = /\s/g;
// const probely = str.match(regexp);

// находит всё кроме переносы строк и  пробелов
// const regExp = /\S/g;
// const invertprobely = str.match(regExp);

// d-ищет только цыфры
// D - ищет всё, кроме цыфр
// w - ищет всю латиницу, нижние подчеркивания и цифры
// ^java - ищет есть ли в начале строки слово java
// java$ - ищет есть ли в конце строки слово java
// /scrip|b/g - ищет script в конце слов.
// /|bscrip/g - ищет script в начале слов.
// /|bscrip|b/g - ищет все слова которые одновременно начинаются и заканциваются script 

// console.log(regexp1.test(str));
// console.log(regexp2.test(str));
// console.log(/test/.test(str));
// console.log(exec1);
// console.log(exec2);

// const test = `yah yao yaho yahooo yahooooooo yahoooooo`;
// квантификатор ? - любое количество повторений символа перед ним в том числе и 0
// const regexppp =  /yaho?/g;
// const kvantificator = test.match(regexppp);
// console.log('kvantificator', kvantificator);

// /yaho+/g;квантификатор + - любое количество повторений символа перед ним, но миниму 1.
// /yaho{2}/g;квантификатор  - любое количество повторений символа перед ним, но миниму 2.
// /yaho{2,3}/g;квантификатор  - количество повторений символа перед ним от 2 до 3.

// ищит тэги
// const html = `
// <h1>Привет мир</h1>
// <a href="https://methed.ru">Methed</a>
// <a href="tel:880033336202">8 800 333 62 02</a>
// <a href="mailto:info@methed.ru">Консультация</a>
// `;
// const regtags = /<.+?>/g; //?-отлючает жадность квантификатора +
// const regtag = /<.+>/g;
// const tags = html.match(regtag);
// console.log(tags)

// /<gray|grow>/g - квантификатор | как или, ищет либо gray либо grow


// const input = document.querySelector('.input');
// const output = document.querySelector('.output');

// input.addEventListener('input', () => {
//   output.textContent = input.value.replace(/a/g, ''); - не вводятся символ a
//   input.value = input.value.replace(/\d/g, ''); - не вводятся цифры
//   input.value = input.value.replace(/[А-Я]/gi, ''); - не вводятся кирилица
//   input.value = input.value.replace(/[^А-Я]/gi, ''); - вводится только кирилица
//   output.textContent = input.value.replace(/\D/g,(str) => str.toUpperCase()); - выводит все буквы заглавными
//   output.textContent = input.value.replace(/(\w+)@(\w+)\.(\w+)/g,(str) => console.log(str)); - вытаскивает эмэил из текста
// })


// первое задание
const one = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const regOne = /\.(js|jsx|ts)/;
const files = one.filter(file => file.match(regOne));
console.log('Onetask:',files)

// второе задание
const two = `my-mail@yandex.ru tom_yam@ya.ru zero@mai1.xyz info@methed.ru max24@mail.com java_script@google.io`;

const regTwo = /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}/;
const emails = two.split(' ').filter(mail => mail.match(regTwo));
console.log('Twotask:', emails);

// третье задание
const three = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.`;

const regThree = /\(.+?\)/g;
const text = three.match(regThree);
console.log('Threetask:', text);

//четвертое задание
const four = `
https://methed.ru
https://ya.ru
https://google.com
`;

const regfour = /https.+?\..+/g
const link = four.match(regfour);

let links = '';

link.forEach((item, i) => {
  links += item.replace(regfour, `<a href="${link[i]}">${link[i].slice(8)}</a>`)
  // console.log(four.replace(regfour, `<a href="${link[i]}">${link[i].slice(8)}</a>`))
})

console.log('Fourtask:', links);

