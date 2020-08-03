import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    // nome: 'Categoria inicial',
    nome: '',
    // descricao: 'Descrição inicial',
    descricao: '',
    cor: '#000'
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
    })
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value,
      // getAttribute('name'),
      // value
    );
  };

  // console.log(nomeDaCategoria);
  // console.log('[nomeDaCategoria]', nomeDaCategoria);

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria: {nomeDaCategoria}</h1> */}
      <h1>Cadastro de Categoria: {values.nome}</h1>

      {/* <form style={{ background: nomeDaCategoria }} onSubmit={function handleSubmit(infosDoEvento) { */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o form, né?');

        setCategorias([
          ...categorias,
          // nomeDaCategoria
          values
        ]);

        // setValues({});
        setValues(valoresIniciais);

      }}>

        

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


        <div>
        <label>
            Descrição:
            <textarea type="text" 
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
        </div>

        <FormField
          label="Descrição"
          type=""
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

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {/* {categoria} */}
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/" >
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;