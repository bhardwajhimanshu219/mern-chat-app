import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Chatspage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={ HomePage} exact/>
       <Route path='/Chats' component={Chatspage } />
      
    </div>
  );
}

export default App;
