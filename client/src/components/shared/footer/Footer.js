import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <p>©2022</p>
        <Link to='/privacy'>
            <p>Privacy</p>
        </Link>
        <p>-</p>
        <Link to='/terms'>
            <p>Terms</p>
        </Link>
    </footer>
)

export default Footer;