import api from './api';

const generateRandomId = () => {
  // Pokemon IDs go from 1 to 898
  return Math.floor(Math.random() * 897) + 1;
};

const createRoundIds = (pokemonPerRound) => {
  // Using Set to remove possibility of duplicate IDs within the same array
  const round = new Set();
  while (round.size < pokemonPerRound) {
    round.add(generateRandomId());
  }
  return [...round];
};

const loadRound = async (pokemonPerRound) => {
  const roundIds = createRoundIds(pokemonPerRound);
  const toTitleCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let roundData = await Promise.all(
    roundIds.map(async (id) => {
      try {
        // Use API to grab pokemon's ID, name, and image
        const res = await api.get(id);
        const pokemon = {
          id: res.id,
          name: toTitleCase(res.name),
          image: res.sprites.other['official-artwork'].front_default,
          answer: false,
        };
        return pokemon;
      } catch (err) {
        console.log(err);
      }
    })
  );

  // randomly mark one of the 4 pokemon as the "answer"
  const chosenId = Math.floor(Math.random() * pokemonPerRound);
  roundData[chosenId] = {
    ...roundData[chosenId],
    answer: true,
  };

  // Under low data speeds during throttle testing, each image took >3 seconds to load, so we need to start preloading images once the app is initiated and prevent the start of the next round until that round's image is ready in the cache
  const img = new Image();
  img.src = roundData[chosenId].image;
  await img.decode();

  return roundData;
};

export default loadRound;
