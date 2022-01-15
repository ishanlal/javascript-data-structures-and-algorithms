function min_platforms(arrival, departure){
  if(arrival.length != departure.length){
    return -1;
  }
  arrival = arrival.sort();
  departure = departure.sort();
  let platform_req = 1;
  let max_platform_req = 1;
  let i = 1;
  let j = 0;
  while(i<arrival.length && j<departure.length){
    if(arrival[i]<departure[j]){
      platform_req+=1;
      i += 1;
      if(platform_req>max_platform_req){
        max_platform_req = platform_req;
      }
    }else{
      platform_req -= 1;
      j += 1;
    }
  }
  return max_platform_req;
}
function test_function(test_case){
  arrival = test_case[0];
  departure = test_case[1];
  solution = test_case[2];
  let output = min_platforms(arrival, departure);
  if (output == solution){
    console.log('Pass');
  }
  else{
    console.log('Fail');
  }
}
let arrival = [900, 940, 950, 1100, 1500, 1800];
let departure = [910, 1200, 1120, 1130, 1900, 2000];
test_case = [arrival, departure, 3];
test_function(test_case);
arrival = [200, 210, 300, 320, 350, 500]
departure = [230, 340, 320, 430, 400, 520]
test_case = [arrival, departure, 2]
test_function(test_case)
