import { useEffect, useState } from 'react';
import Card from './components/Card';
import CardSmall from './components/CardSmall';
import { api } from './services/api';
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
];

let allProducts = [];

function App() {
  const [menuCards, setMenuCards] = useState(startMenuCards);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    api.get(`frontent-teste`).then(response => {
      setProductsToShow(response.data.products);
      allProducts = response.data.products;
    })
  }, []);

  function changeActiveButton(title) {
    const newProductsReset = menuCards.map(task => {
      return {
        ...task,
        active: false
      }
    })
    const newProducts = newProductsReset.map(task => task.title === title ?
      {
        ...task,
        active: true
      }
      : task);
    setMenuCards(newProducts);
    filterProducts(title);

  }

  function filterProducts(title) {
    if (title == 'Todos') {
      setProductsToShow(allProducts)
    } else {
      const filteredProducts = allProducts.filter(function (product) {
        return product.productName == title
      })
      setProductsToShow(filteredProducts);
    }
  }

  function handleSelectOptionChange(Event) {
    console.log('change')
    console.log(Event)
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
        {
          productsToShow.length == 0 ? <p>loading</p> :
            productsToShow.map(card => (
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
