import { Logo } from '../../assets'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
               <a href="#"><img src={Logo} alt="Logo"  className='navbar-logo'/></a>
               <ul className="navbar-lists">
                <li className="navbar-list"><a href="" className="navbar-sublink">Bosh sahifa</a> </li>
                <li className="navbar-list"><a href="" className="navbar-sublink">Biz haqimizda</a> </li>
                <li className="navbar-list"><a href="" className="navbar-sublink">Turlar </a> </li>
                <li className="navbar-list"><a href="" className="navbar-sublink">Kontaktlar</a> </li>
               </ul>
               <ul className="navbar-bnts">
                   <li className='navbar-btn'><a href="#" className='navbar-link'>UZ</a></li>
                   <li className='navbar-btn'><a href="#" className='navbar-link'>EN</a></li>
                   <li className='navbar-btn'><a href="#" className='navbar-link'>RU</a></li>
                <li className='navbar-btn'>  <a href="#" className="navbar-link"><i class="fa-brands fa-telegram"></i></a></li>
                 <li className='navbar-btn'><a href="#" className="navbar-link"><i class="fa-brands fa-instagram"></i></a></li>
                
               </ul>
               <div className="modal">Modal</div>
        </div>
    </div>
  )
}

export default Navbar