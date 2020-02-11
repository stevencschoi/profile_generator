const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your name? Nicknames are also acceptable :)`, (name) => {
  console.log(`Nice to meet you, ${name}`);

  rl.question(`What's an activity you like doing?`, (activity) => {
    console.log(`Your answer is: ${activity}`);

    rl.question('What do you listen to while doing that?', (music) => {
      console.log(`Your answer is: ${music}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {
        console.log(`Your answer is: ${meal}`);

        rl.question(`What's your favourite thing to eat for that meal?`, (food) => {
          console.log(`Your answer is: ${food}`);

          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            console.log(`Your answer is: ${sport}`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (power) => {
              console.log(`Your answer is: ${power}`);
              console.log(`${name} likes to listen to ${music} while they do ${activity}. Their favourite meal is ${meal}, where they like to eat ${food}. Their favourite sport is ${sport} and their superpower is ${power}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});