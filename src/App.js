import { useState } from 'react';
import CardSmall from './components/CardSmall';
import './styles/global.scss';
import './styles/menu.scss';

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
    </div>
  );
}

export default App;
