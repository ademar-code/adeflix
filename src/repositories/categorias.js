/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  //console.log(config.URL_BACKEND_TOP);

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });

  //return config.URL_BACKEND_TOP;
}

function getAll() {
  //console.log(config.URL_BACKEND_TOP);

  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });

  //return config.URL_BACKEND_TOP;
}

export default {
  getAllWithVideos,
  getAll,
};
