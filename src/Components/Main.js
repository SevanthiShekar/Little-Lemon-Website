import React from 'react'
import photo from './assets/restauranfood.jpg'
import greek_salad from './assets/greek_salad.jpg'
import bruchetta from './assets/bruchetta.jpg'
import lemon_dessert from './assets/lemon_dessert.jpg'
import delivery from './assets/delivery.jpg'
import user1 from './assets/user1.jpeg'
import user2 from './assets/user2.jpeg'
import user3 from './assets/user3.jpeg'
import user4 from './assets/user4.jpeg'
import Bros1 from './assets/Mario_and_Adrian_A.jpg'
import Bros2 from './assets/Mario_and_Adrian_B.jpg'
import "./Main.css"

const Main = () => {
  return (
    <main>
       {/*-------Main Banner Section------------*/}
      <section className='hero'>
        <div className='content'>
           <h1 className='title'>Little Lemon</h1>
           <h3 className='subtitle'>Chicago</h3>
           <p>We are family owned Mediterranean restaurant, </p>
           <p>focused on traditional recipes with a modern twist.</p>
           <button className='reserve-button'>Reserve A Table</button>
        </div>
        <img src={photo} alt="dish-photo" className='dish-photo'></img>
      </section>

       {/*-------Specials Section------------*/}
      <section>
        <h1 className='heading'>This week's specials!</h1>
        <button className='online-menu-button'>Online Menu</button>
        <div className='specials'>
          <div className='special'>
              <img src={greek_salad} alt="greek-salad" className='dish-picture'/>
              <div className='grey-backdrop'>
                  <div className='card-title'>
                    <h2 className='dish-name'>Greek Salad</h2>
                    <h2 className='dish-price'>$ 12.99</h2>
                  </div>
                  <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                  <div className='delivery'>
                    <h2 className='delivery-tag'>Order a delivery</h2>
                    <img src={delivery} alt="delivery-option" className='delivery-photo'></img>
                  </div>
              </div>
           </div>
           <div className='special'>
              <img src={bruchetta} alt="greek-salad" className='dish-picture'/>
              <div className='grey-backdrop'>
                  <div className='card-title'>
                    <h2 className='dish-name'>Bruschetta</h2>
                    <h2 className='dish-price'>$ 5.99</h2>
                  </div>
                  <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                  <div className='delivery height-fix-1'>
                    <h2 className='delivery-tag' >Order a delivery</h2>
                    <img src={delivery} alt="delivery-option" className='delivery-photo'></img>
                  </div>
              </div>
           </div>
           <div className='special'>
              <img src={lemon_dessert} alt="greek-salad" className='dish-picture'/>
              <div className='grey-backdrop'>
                  <div className='card-title'>
                    <h2 className='dish-name'>Lemon Dessert</h2>
                    <h2 className='dish-price'>$ 5.00</h2>
                  </div>
                  <p className='dish-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <div className='delivery height-fix-2'>
                    <h2 className='delivery-tag'>Order a delivery</h2>
                    <img src={delivery} alt="delivery-option" className='delivery-photo'></img>
                  </div>
              </div>
           </div>
        </div>
      </section>

       {/*-------Testimonials Section------------*/}
      <section className="testimony-background">
        <h3 className='testimony-heading'>Testimonials</h3>
        <div className='testimonies'>
          <div className='testimony'>
            <h3 className='rating'>9.8/10</h3>
            <div className='details'>
              <img src={user1} alt="Sophia Grant" className='customer-image'/>
              <h3 className='customer-name'>Sophia Grant</h3>
            </div>
            <p className='customer-review'>Little Lemon offers a perfect romantic ambiance with delicious seafood pasta.</p>
          </div>
          <div className='testimony'>
            <h3 className='rating'>9.5/10</h3>
            <div className='details'>
              <img src={user2} alt="Sophia Grant" className='customer-image'/>
              <h3 className='customer-name'>Ethan Blackwell</h3>
            </div>
            <p className='customer-review'>Chef Mario's avocado toast and coffee are a must-try for brunch lovers.</p>
          </div>
          <div className='testimony'>
            <h3 className='rating'>9.7/10</h3>
            <div className='details'>
              <img src={user3} alt="Sophia Grant" className='customer-image'/>
              <h3 className='customer-name'>Jasmine Rivera</h3>
            </div>
            <p className='customer-review'>They serve fresh guacamole and the best margaritas in town.</p>
          </div>
          <div className='testimony'>
            <h3 className='rating'>9.4/10</h3>
            <div className='details'>
              <img src={user4} alt="Sophia Grant" className='customer-image'/>
              <h3 className='customer-name'>Oliver Hayes</h3>
            </div>
            <p className='customer-review'>Little Lemon delights with fresh, flavorful dishes and attentive service.</p>
          </div>
        </div>
      </section>

       {/*-------About Section------------*/}
      <section className='about-section'>
        <div className='brothers-info'>
          <h1 className='info-title'>Little Lemon</h1>
          <h3 className='info-subtitle'>Chicago</h3>
          <p className='history'>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
        </div>
        <div className='brothers-images'>
          <img src={Bros1} alt="brothers" className="bros-1"/><br/>
          <img src={Bros2} alt="brothers" className="bros-2"/>
        </div>
      </section>
    </main>
  )
}

export default Main
