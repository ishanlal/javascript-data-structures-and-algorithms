let udacity = {};
udacity['u'] = 1
udacity['d'] = 2
udacity['a'] = 3
udacity['c'] = 4
udacity['i'] = 5
udacity['t'] = 6
udacity['y'] = 7
console.log(udacity);
console.log(udacity['t']);
let dictionary = {};
dictionary['d'] = [1]
dictionary['i'] = [2]
dictionary['c'] = [3]
dictionary['t'] = [4]
dictionary['i'].push(5)
dictionary['o'] = [6]
dictionary['n'] = [7]
dictionary['a'] = [8]
dictionary['r'] = [9]
dictionary['y'] = [10]
console.log(dictionary);
let locations = {'North America': {'USA': ['Mountain View']}};
locations['North America']['USA'].push('Atlanta');
locations['Asia'] = {'India': ['Bangalore']};
locations['Asia']['India'].push('New Delhi');
locations['Asia']['China'] = ['Shanghai'];
locations['Africa'] = {'Egypt': ['Cairo']};
console.log(1);
let usa_sorted = locations['North America']['USA'].sort();
usa_sorted.forEach((item, i) => {
  console.log(item);
});
console.log(2);
let asia_cities = [];
for (let [country, cities] of Object.entries(locations['Asia'])) {
  for (city of cities){
    asia_cities.push(`${city} - ${country}`);
  }
}
let asia_sorted = asia_cities.sort();
asia_sorted.forEach((item, i) => {
  console.log(item);
});
