import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import './App.css';
import Header from './componentes/Header/Header';
import Cards from './componentes/Card/Cards';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header titulo='Galería de Imagenes con React' />

      <Container fluid='sm' className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">


          <Cards src={'https://images.pexels.com/photos/11489837/pexels-photo-11489837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            titleImg='Dude'
            titleCard={`Nombre de la obra: 'Dude'`} descripcion={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas molestias et, necessitatibus iste aliquid veniam, officiis corporis ratione, distinctio eos molestiae similique illo corrupti! Placeat harum quisquam adipisci molestiae!'}
            titleButton='mas informacion sobre la obra...'
          />



          <Cards src={'https://images.pexels.com/photos/13211472/pexels-photo-13211472.jpeg'}
            titleImg='Titulo de la imagen'
            titleCard={`Nombre de la obra: 'City'`} descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas molestias et, necessitatibus iste aliquid veniam, officiis corporis ratione, distinctio eos molestiae similique illo corrupti! Placeat harum quisquam adipisci molestiae!'
            titleButton='mas informacion sobre la obra...'
          />



          <Cards src={'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            titleImg='Titulo de la imagen'
            titleCard={`Nombre de la obra: 'Calido sentir'`} descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas molestias et, necessitatibus iste aliquid veniam, officiis corporis ratione, illo corrupti! Placeat harum quisquam adipisci molestiae!'
            titleButton='mas informacion sobre la obra...'
          />



          <Cards src={'https://images.pexels.com/photos/12036442/pexels-photo-12036442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            altImg='Atlas obra fotografica'
            titleCard={`Nombre de la obra: 'Atlas'`} descripcion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quas molestias et, necessitatibus iste aliquid veniam, officiis corporis ratione, distinctio eos molestiae similique illo corrupti! Placeat harum quisquam adipisci molestiae!'
            titleButton='mas informacion sobre la obra...'
          />

        </Row>
      </Container>

      <Footer titleFooter='Descripcion del sitio' descripcion='Esta es una Galeria destinada a la presentacion de obras fotograficas en diferentes perspectivas.' />

    </div>
  );
}

export default App;
