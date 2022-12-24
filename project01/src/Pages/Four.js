import React from 'react';
import img from '../image/img1.png';

export default function Four() {
  
  return (
 <div>
    <h5 class="text-primary">ZED TICKET-Pay Mood</h5>

    <div className='check'>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
Cash  </label>
</div>   


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
Credit Card  </label>
</div>   


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
Salary  </label>
</div>         

   <img src={img} height={100} width={200} alt="image1" class="center-block"/>     
    <div>
    <button type="button" class="btn btn-primary">Next</button>
   </div>






</div>
    </div>
  )
}
