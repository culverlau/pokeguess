const get = async (id) => {
  const base = 'https://pokeapi.co/api/v2/pokemon/';
  const url = base + id;
  try {
    const response = await fetch(url).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const api = {
  get,
};

export default api;
