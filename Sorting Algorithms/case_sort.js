function case_sort(string){
  console.log(string);
  let upper_ch_index = 0;
  let lower_ch_index = 0;
  let sorted_str = string.split('').sort(); // upper case are moved to the beginning of the array
  console.log(sorted_str);
  for (let [index, character] of sorted_str.entries()){
    let ascii_int = character.charCodeAt(0);
    if (97 <= ascii_int && ascii_int <= 122){
      lower_ch_index = index; // find sorted lowercase character beginning
      break;
    }
  }
  let output = [];
  for (let character of string){
    let ascii_int = character.charCodeAt(0);
    if(97 <= ascii_int  && ascii_int <= 122){
      output.push(sorted_str[lower_ch_index]);
      lower_ch_index += 1;
    } else{
      output.push(sorted_str[upper_ch_index]);
      upper_ch_index += 1;
    }
  }
  return output.join('');
}

function test_function(test_case){
  test_string = test_case[0];
  solution = test_case[1];
  if(case_sort(test_string) == solution){
    console.log('Pass');
  } else{
    console.log('Fail');
  }
}

let test_string = 'fedRTSersUXJ';
let solution = 'deeJRSfrsTUX';
let test_case = [test_string, solution];
test_function(test_case);
test_string = 'defRTSersUXI';
solution = 'deeIRSfrsTUX';
test_case = [test_string, solution];
test_function(test_case);
