function search_results(repo, query){
  let words = repo.sort();
  if (query.length < 2){
    return [];
  }
  let search_results = [];
  search_results = words.filter((item) => {
    if(item.startsWith(query)){return item}
  });
  search_results = search_results.sort();
  return search_results.slice(0,3);
}

let repository = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
let repository2 = ['baggage', 'bags', 'banner'];

let results = search_results(repository, 'm');
console.log(results);
results = search_results(repository, 'mo');
console.log(results);
results = search_results(repository, 'mou');
console.log(results);
results = search_results(repository, 'mous');
console.log(results);
results = search_results(repository, 'mouse');
console.log(results);

results = search_results(repository2, 'ba');
console.log(results);
results = search_results(repository2, 'bag');
console.log(results);
results = search_results(repository2, 'bags');




console.log(results);
