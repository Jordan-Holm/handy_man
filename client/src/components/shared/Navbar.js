import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/team'>
                <li>Team</li>
            </Link>
            <Link to='/workers'>
                <li>Workers</li>
            </Link>
        </ul>
    </nav>
)

export default Navbar;