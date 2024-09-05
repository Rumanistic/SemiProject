import './App.css';
import List from './pages/List';
//import Faq from './pages/Faq';
import Support from './pages/Support'
import { Route, Routes } from 'react-router-dom';
import EventDetail from './pages/EventDetail';

function App() {

  return (
    <div className="App">
  		<Routes>
  			<Route path='/' />
				<Route path='/lists/:page/*' element={<List />}/>
   	  	<Route path='/supports/*' element={<Support />} />
	  	</Routes>
    </div>
  );
}

export default App;
