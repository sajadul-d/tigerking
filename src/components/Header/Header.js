import logo from '../../images/logo1.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className="header-area">
            <h2 className="title">Tiger King</h2>
            <img src={logo} alt="" />
            <h1 className="head">Select Players and Build your Team</h1>
        </div>
    );
};

export default Header;