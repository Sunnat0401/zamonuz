import React from 'react'
import './About.css'
import Button from '../../../Component/Button/Button'
import { airplane, train } from '../../../assets'
const About = () => {
  return (
    <div className='countries'>
        <div className="container">
            <h1 className="countries-title">Chiptalarni Biz Bilan <br /> Arzon Va Oson Toping</h1>
            <p className="countries-text">Har bir shaharda eng yaxshi temir yo‘l va aviachipta  <br />biletlarini biz bilan toping</p>
            <div className="countries-wrapper">
            <div className="countries-cards">
                <img src={train} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">Temir Yo‘l Biletlari Biz Bilan</h2>
                            <p className='countries-paragraph'> Butun dunyo bo'ylab</p>
                        </div>
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.</p>
                </div>
            </div>
            <div className="countries-cards">
                <img src={airplane} alt="train "  className='countries-img'/>
                <div className="countries-card">
                    <div className="countries-info">
                        <div className="countries-texts">
                            <h2
                             className="countries-subtitle">Aviabiletlar Biz Bilan Arzon</h2>
                            <p className='countries-paragraph'> Butun dunyo bo'ylab</p>
                        </div>
                        <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} />
                    </div>
                    <p className='countries-caption'>Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About