const adjectives = [
    'Smelly',
    'Greedy',
    'Shiny',
    'Jolly',
    'Peaceful',
    'Sly',
    'Exciting',
    'Evasive',
    'Easy',
    'Slippery',
    'Testy',
    'Trite',
    'Vigorous',
    'Clever',
    'Sudden',
    'Bright',
    'Envious',
    'Sulky',
    'Crazy',
    'Metal',
    'Heavy'
]

const animals = [
    'Fish',
    'Okapi',
    'Bison',
    'Bunny',
    'Skunk',
    'Zebu',
    'Mare',
    'Parrot',
    'Tiger',
    'Lion',
    'Squid',
    'Shark',
    'Snail',
    'Eagle',
    'Hawk',
    'Ape',
    'Gorilla',
    'Hen',
    'Bull'
]

function generate() {
    const first = adjectives[Math.floor(Math.random()*adjectives.length)];
    const last = animals[Math.floor(Math.random()*animals.length)];
    return `${first} ${last}`;
}

module.exports = {generate}