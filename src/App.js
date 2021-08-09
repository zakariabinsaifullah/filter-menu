import './App.css';
import Menu from './Components/Menu';
import Categories from './Components/Categories';

import data from './data'
import {useState} from "react";

const allCategories = ['all', ...new Set(data.map(item => item.category))];
function App() {
   const [menuItems, setMenuItems] = useState(data);
   const filterItems = (category) => {
       if (category === 'all' ){
           setMenuItems(data);
           return;
       }
       const newItems = data.filter(item => item.category === category );
       setMenuItems(newItems);
   }
  return (
    <div className="App">
        <Categories categories={ allCategories } filterItems={ filterItems } />
        <Menu items={menuItems} />
    </div>
  );
}

export default App;
