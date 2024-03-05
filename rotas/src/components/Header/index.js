import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <h2>Logo</h2>
            <div className="">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Header;