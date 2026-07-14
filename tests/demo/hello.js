console.log('Playwright World');

/**
 *
 * @param {*} para1
 * @param {*} para2
 */
function summary(para1, para2) {
  console.log(para1, ' : ', para2);
}
summary('Here i com - ', 'Playwright World');

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let windows = ['Google', 'Youtube', 'Amazon'];

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

for (let element of windows) {
  console.log(element);
}
