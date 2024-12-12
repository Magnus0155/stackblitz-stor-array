// Loop trough an array

const data = [
  {
    fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    length: 114,
  },
  {
    fact: "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    length: 97,
  },
  {
    fact: "The technical term for a cat’s hairball is a “bezoar.”",
    length: 54,
  },
  {
    fact: "A group of cats is called a “clowder.”",
    length: 38,
  },
  {
    fact: "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
    length: 142,
  },
  {
    fact: "Cats make about 100 different sounds. Dogs make only about 10.",
    length: 62,
  },
  {
    fact: "Every year, nearly four million cats are eaten in Asia.",
    length: 55,
  },
  {
    fact: "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
    length: 100,
  },
  {
    fact: "Approximately 24 cat skins can make a coat.",
    length: 43,
  },
  {
    fact: "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
    length: 278,
  },
];

/*Oppgave 2*/ 

console.log("eksempel 1 log nr 5")

console.log(data[5].fact);

console.log("eksempel 2 loop")

for(let index = 0; index < data.length; index++) {
  console.log(data[index].fact);
}

console.log("eksempel 3 async")

async function fetchFile() {
  const dataFile = await fetch("https://catfact.ninja/facts");
  console.log(dataFile);

  const response = await dataFile.json();
 // console.log (response.data[5].fact);
 // console.log(response[5].fact);
  for(let index = 0; index < response.length; index++){
    console.log (response.data[index].fact);
  }
};

fetchFile()
//Oppgave 
// 1. lag en 'for loop' som går gjennom variable response og viser alle fact

//Bonus oppgave:
//svar på oppgave 1 med en annen loop metode

//!!!!!!! forskjellige oppgaver.

// Oppgave:
// 1: Se på variable 'data' og identifiser hva den inneholder.
// 2: Skriv en consol.log ut resultatet som gir teksten "Cats make about 100 different sounds. Dogs make only about 10."

// Bonus oppgave:
// 1. Lag en 'for loop' som gir ut alle fact resultatene

