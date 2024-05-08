import './App.css';
import StripeContainer from './components/StripeContainer';
import poseidon from './assets/2024-03-28T13-53-34.561Z-Le poseidon apartment.png';
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className='App'>
      <h1>Checkout</h1>
      {showItem ? 
      (<StripeContainer/>
      ) : (
      <> 
        <h3>$500</h3> 
        <img src={poseidon} alt="Le poseidon" />
        <button onClick={() => setShowItem(true)}>Book a room</button>
      </>
        )}
    </div>
  );
}

export default App;
