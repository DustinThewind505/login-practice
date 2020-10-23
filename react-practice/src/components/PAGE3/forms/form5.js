import React from 'react';



function Form5() {
    // ========== STATE ==========






    // ========== FUNCTIONS ==========



    // ========== COMPONENT ==========
    return(
       <div className='form-container'>
           <h3>Form #5</h3>
           <p>Number:</p>
           <form>
               <h3>Form #5 - input/number</h3>
               <section className='form-body'>
                   <label>number
                       <input type='number' />
                   </label>
               </section>
               <footer>
                   <button type='submit'>Submit</button>
               </footer>
           </form>
       </div>
    )
}

export default Form5;