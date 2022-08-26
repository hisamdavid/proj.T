const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const pool={
  registerNewAnswer(){
    readline.question("What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++",ch=>{
      console.log(ch);
      readline.close();
    });
  }

}

pool.registerNewAnswer();
