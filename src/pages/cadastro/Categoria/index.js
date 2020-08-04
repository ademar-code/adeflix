/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    // nome: 'Categoria inicial',
    nome: '',
    // descricao: 'Descrição inicial',
    descricao: '',
    cor: '#000',
  };

  // const nomeDaCategoria = useState('Filmes');
  // let nomeDaCategoria = useState('Filmes');
  // const [categorias, setCategorias] = useState(['Teste']);
  const [categorias, setCategorias] = useState([]);
  // let [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
      // getAttribute('name'),
      // value
    );
  }

  // console.log(nomeDaCategoria);
  // console.log('[nomeDaCategoria]', nomeDaCategoria);

  // useEffect(() => {
  //   console.log('alo alo w brazil');
  // });
  useEffect(() => {
    // const URL_TOP = 'http://localhost:8080/categorias';
    const URL_TOP = window.location.hostname('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'http://localhost:8080/categorias';
    fetch(URL_TOP)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
    // console.log('alo alo w brazil');
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanuda',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra categoria bacanuda',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 0.7 * 1000);
  }, []);

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria: {nomeDaCategoria}</h1> */}
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      {/* <form style={{ background: nomeDaCategoria }} onSubmit={function handleSubmit(infosDoEvento) { */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form, né?');

        setCategorias([
          ...categorias,
          // nomeDaCategoria
          values,
        ]);

        // setValues({});
        setValues(valoresIniciais);
      }}
      >

        {/* <div>
          <label>
            Nome da Categoria:
            <input type="text"
            name="nome"
            // value={nomeDaCategoria}
            value={values.nome}
            // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
            //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
            //   // console.log('[infosDoEvento]', infosDoEvento);
            //   // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
            //   // setNomeDaCategoria(infosDoEvento.target.value);
            //   // setValue('nome', infosDoEvento.target.value);
            //   setValue(
            //     infosDoEvento.target.getAttribute('name'),
            //     infosDoEvento.target.value
            //   );
            // }}
            onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
            // value={nomeDaCategoria}
              value={values.descricao}
            // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
            //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
            //   // console.log('[infosDoEvento]', infosDoEvento);
            //   // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
            //   // setNomeDaCategoria(infosDoEvento.target.value);
            // }}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input type="color"
            // value={nomeDaCategoria}
            value={values.cor}
            // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
            //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
            //   // console.log('[infosDoEvento]', infosDoEvento);
            //   // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
            //   // setNomeDaCategoria(infosDoEvento.target.value);
            // }}
            name="cor"
            onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={handleChange}
        />

        {/* <button>
          Cadastrar
        </button> */}
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (<div>
        Loading...
      </div>)}

      <ul>
        {/* {categorias.map((categoria, indice) => ( */}
        {categorias.map((categoria) => (
          // <li key={`${categoria}${indice}`}>
          <li key={`${categoria.nome}`}>
            {/* {categoria} */}
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
