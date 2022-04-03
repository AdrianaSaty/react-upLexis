import { useState } from 'react';
import Card from './components/Card';
import CardSmall from './components/CardSmall';
import './styles/global.scss';
import './styles/select-option.scss';

const startMenuCards = [
  { icon: 'globe', title: 'Todos', active: true },
  { icon: 'briefcase', title: 'Profissional', active: false },
  { icon: 'university', title: 'Reguladores', active: false },
  { icon: 'tree', title: 'Sócio Ambiental', active: false },
  { icon: 'gavel', title: 'Jurídico', active: false },
  { icon: 'ban', title: 'Listas Restritivas', active: false },
  { icon: 'earth', title: 'Mídia/Internet', active: false },
  { icon: 'gem', title: 'Bens e Imóveis', active: false },
  { icon: 'person', title: 'Cadastro', active: false },
]

const apiretorno = {
  "products":
    [
      {
        "productName": "Profissional",
        "productDesc": "",
        "productPrice": 20.99,
        "productDate": 1610316378000
      },
      {
        "productName": "Reguladores",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 15.50,
        "productDate": 1624313178000
      },
      {
        "productName": "Sócio Ambiental",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 60.20,
        "productDate": 1506204378000
      },
      {
        "productName": "Jurídico",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 850.00,
        "productDate": 1608847578000
      },
      {
        "productName": "Listas Restritivas",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 25.99,
        "productDate": 1610143578000
      },
      {
        "productName": "Mídia/Internet",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 530.30,
        "productDate": 1610143578000
      },
      {
        "productName": "Bens e Imóveis",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 15.50,
        "productDate": 1613167578000
      },
      {
        "productName": "Cadastro",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 452.37,
        "productDate": 1619820378000
      },
      {
        "productName": "Financeiro",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 998.56,
        "productDate": 1647381978000
      },
      {
        "productName": "Financeiro",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 15.50,
        "productDate": 1020290778000
      },
      {
        "productName": "Sócio Ambiental",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 15.50,
        "productDate": 1625695578000
      },
      {
        "productName": "Jurídico",
        "productDesc": "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        "productPrice": 333.20,
        "productDate": 1636149978000
      }
    ]
}

function App() {
  const [menuCards, setMenuCards] = useState(startMenuCards);
  function changeActiveButton(title) {
    const newTasksReset = menuCards.map(task => {
      return {
        ...task,
        active: false
      }
    })
    const newTasks = newTasksReset.map(task => task.title === title ?
      {
        ...task,
        active: true
      }
      : task);
    setMenuCards(newTasks);
  }

  function handleSelectOptionChange(Event) {
    console.log('change')
    console.log(Event)
    // this.setState({value: event.target.value});
  }

  return (
    <div className="App">
      <div className='c-menu'>
        {menuCards.map(card => (
          <CardSmall
            key={card.title}
            icon={card.icon}
            title={card.title}
            active={card.active}
            changeActiveButton={changeActiveButton}
          />
        ))}
      </div>
      <div className='c-select-option'>
        <p className='c-select-option__text'>ORDENAR</p>
        <select>
          <option>Lançamento</option>
          <option>Preço</option>
        </select>
      </div>
      <div className='c-showcase'>
        {apiretorno.products.map(card => (
          <Card
            key={card.productDate + card.productName}
            icon='globe'
            title={card.productName}
            description={card.productDesc}
            price={card.productPrice}
          />
      
        ))}
      </div>
    </div>
  );
}

export default App;
