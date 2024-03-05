import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
          <h1>bem vindo a página home</h1>
          <br /><br />
          <Link to='/sobre'>Sobre</Link>
      </div>  
    );
  }
  
  export default Home;
  