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

{/* <Swiper
spaceBetween={10}
pagination={{ clickable: true }}
navigation
modules={[Scrollbar, Navigation, Pagination]}
className="swiper-container"
>
<SwiperSlide>
  <div className="banner-inner-wrapper header-text">
    <div className="main-caption">
      <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
      <h1>Sharm El-Sheikh</h1>
      <div className="border-button">
        <a href="#contact">Borishni xohlaysizmi?</a>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="more-info">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-user"></i>
                <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-globe"></i>
                <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-home"></i>
                <h4><span>O'rtacha narx:</span><br />$165.450</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="main-button">
                  <a href="#contact">Ko'proq bilish...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="banner-inner-wrapper header-text">
    <div className="main-caption">
      <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
      <h1>Sharm El-Sheikh</h1>
      <div className="border-button">
        <a href="#contact">Borishni xohlaysizmi?</a>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="more-info">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-user"></i>
                <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-globe"></i>
                <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-home"></i>
                <h4><span>O'rtacha narx:</span><br />$165.450</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="main-button">
                  <a href="#contact">Ko'proq bilish...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="banner-inner-wrapper header-text">
    <div className="main-caption">
      <h2>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
      <h1>Sharm El-Sheikh</h1>
      <div className="border-button">
        <a href="#contact">Borishni xohlaysizmi?</a>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="more-info">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-user"></i>
                <h4><span>Aholisi:</span> <br /> 69.86 M</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-globe"></i>
                <h4><span>Hududi:</span> <br /> 513.120 KM<em>2</em></h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <i className="fa fa-home"></i>
                <h4><span>O'rtacha narx:</span><br />$165.450</h4>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="main-button">
                  <a href="#contact">Ko'proq bilish...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
</Swiper> */}