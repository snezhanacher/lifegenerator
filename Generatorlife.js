let userName = '';
userName ? console.log(`Hello,${userName}!`): console.log('Hello!');
const lifeQuestion = "Whats gonna be with me in the future?";
console.log (`The user asked: ${lifeQuestion}`); 
const randomNumber = Math.floor(Math.random() * 4);
let lifeAnswer = '';
switch (randomNumber) {
    case 0:
        lifeAnswer = 'You will be maried twice, will have 5 kids and will be living in a countryside.';
        break;
    case 1:
        lifeAnswer = 'You will be living alone in an island, doing yoga every day and being vegan.';
        break;
    case 2:
        lifeAnswer = 'You will be the best at your work achivements and living in a huge tounhouse in a metropolis.';
        break;
    case 3:
        lifeAnswer = 'You will be a founder of a huge corporate company and will be travaling all your life.';
        break;             
}
console.log(`The life generator answered: ${lifeAnswer}.`);
