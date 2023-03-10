import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <main>
      <Container>
      <Routes>
        <Route path='/' element={<HomeScreen/>} exact />
        <Route path='/product/:_id' element={<ProductScreen/>} />  
      </Routes>
      </Container>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
