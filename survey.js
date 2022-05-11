const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite ?', (meal) => {
        rl.question(' What\'s your favourite thing to eat for that meal?', (favThing) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!' , (superpower) => {
              console.log(`${name} likes to do ${activity} and like to listen ${listen}. Favorite meals is ${meal} likes to eat ${favThing} loves ${sport} good at ${superpower}`);


              rl.close();
            });
          });
        });
      });
    });
  });
});
