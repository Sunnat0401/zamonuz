import React from 'react'
import './FavoriteConnect.css'
import Button from '../Button/Button'
const FavoriteConnect = () => {
  return (
    <div className='favorite-connect'>
    <h1 className='favorite-subject'>O'z <span className='headline'>joyingizni </span> band <span className='headline'>qiling </span></h1>
    <form className='form-container ' >
    <div className="form-wrapper">
    <div className="form-row">
    <div class="form-group">
            <label htmlFor="sfds" className='form-label'>Ismingiz </label> 
            <input type="text" id="sfds"  className='form-input' placeholder="Muhammad"/>
            <label htmlFor="iasdas" className='form-label'>Telefon raqamingiz</label>
            <input type="text" id="iasdas" className='form-input' placeholder='+998 90 124 95 71'/>
        </div>
        <div class="form-group">
            <label htmlFor="sfds" className='form-label'>Necha kishisiz </label> 
            <select id="chooseGuests" name="Guests" className="form-input" aria-label="Default select example" onchange="this.form.click()">
                    <option selected="">ex. 3 or 4 or 5</option>
                    <option type="checkbox" name="option1" value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
            <label htmlFor="iasdas" className='form-label'>Uchish sanasi </label>
            <input type="date" id="iasdas"className='form-input' />
        </div>
        </div>
    </div>
        
    

       </form>
  </div>
  )
}

export default FavoriteConnect

{/* <fieldset>
<label for="chooseDestination" class="form-label">Manzilingizni tanlang</label>
<select id="chooseCategory" name="Destination" class="form-select" aria-label="Default select example" onchange="this.form.click()">
  <option selected="">Antalya</option>
  <option value="Istanbul">Istanbul</option>
  <option value="Dubai">Dubai</option>
  <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
  <option value="Kuala Lumpur">Kuala Lumpur</option>
  <option value="Kanada">Kanada</option>
  <option value="England">Angliya</option>
  <option value="USA">AQSh</option> 
</select>
</fieldset>
<fieldset>
  <label for="chooseDestination" class="form-label">Visa turini tanlang</label>
  <select name="Destination" class="form-select" aria-label="Default select example" id="visa" onchange="this.form.click()">
    <option selected="">Country</option> 
    <option value="Europe">Europe</option>
    <option value="England">England</option>
    <option value="Japan">Japan</option>
    <option value="Oman">Oman</option> 
    <option value="USA">USA</option> 
    <option value="Saudiya Arabistoni">Saudi Arabia</option> 
    <option value="India">India</option> 
    <option value="China">China</option> 
    <option value="HongKong">Hong Kong</option>  


  </select>
</fieldset> */}
{/* <Button width={'155px'} height={'47px'} bg={'#22B3C1'} color={'#fff'} borderRadius={'12px'} /> */}