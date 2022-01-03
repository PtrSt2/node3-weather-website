const text = "Here we go: 1, 2, 3!";
const pattern = /\D+/g;
console.log(text.match(pattern));
console.log(text.split(pattern));
