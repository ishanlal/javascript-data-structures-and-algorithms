// require readline module
// const readline = require('readline');
// create IO interface, also specify the input and output sources
//const commandLineIO = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout,
//});
// show a question to the user
//commandLineIO.question('What is your name? ', (answer)=>{
//  console.log(`Your name is ${answer}`);
//});
// stop accepting the input
//commandLineIO.close();
function guess_the_number(total_tries, start_range, end_range){
  const readline = require('readline');
  const commandLineIO = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Guess the number: '
  });
  if (start_range>end_range){
    start_range = end_range;
    end_range = start_range;
  }
  let random_num = Math.floor(Math.random()*end_range); // getting a random number between a range
  console.log(random_num);
  let try_count = 0;
  let success_message = "Awesome! You guessed correctly";
  let failure_message = "Sorry! No more retries left";
  let miss_message = "Oops! That's incorrect";
  let num_tries = 0;
  let answer_input = '';
  let answer;
  commandLineIO.prompt();
  commandLineIO.on('line', (line)=>{
    console.log(`Your answer is ${line.trim()}`);
    answer_input = line.trim();
    if(num_tries < total_tries){
      if(answer_input == random_num){
        commandLineIO.close();
        console.log(success_message);
        return;
      }
      console.log(miss_message);
      if(answer_input > random_num){
        console.log('Go lower!');
      } else {
        console.log('Go higher!');
      }
      num_tries += 1;
      commandLineIO.prompt();
    }
    else{
      console.log(failure_message);
      commandLineIO.close();
    }
  })
  /*while (num_tries<total_tries){
    commandLineIO.prompt();
    commandLineIO.on('line', (line)=>{
      console.log(`Your answer is ${line.trim()}`);
      answer_input = line.trim();
      commandLineIO.prompt();
    })
    if(answer_input == random_num){
      console.log(success_message);
      return;
    }
    console.log(miss_message);
    if (answer_input > random_num){
      console.log('Go lower!');
    } else{
      console.log('Go higher!');
    }
    num_tries+=1;
  }*/
  //console.log(failure_message);
  //commandLineIO.close();
}

guess_the_number(7, 1, 100);
