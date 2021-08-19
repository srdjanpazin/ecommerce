import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ItemsFeed from './features/items/ItemsFeed';
import SingleItemView from './features/items/SingleItemView';
import AddItem from './features/items/AddItem';
import CartPage from './features/items/CartPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
      	<Switch>
      		<Route exact path="/">
        		<ItemsFeed />
        	</Route>
        	<Route path={["/itm/:itemId", "/edit/:itemId"]}>
        		<SingleItemView />
        	</Route>
          <Route exact path="/cart/">
            <CartPage />
          </Route>
          <Route exact path="/sell/">
            <AddItem />
          </Route>
      	</Switch>
      </main>
    </div>
  );
}

export default App;