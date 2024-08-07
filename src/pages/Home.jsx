import React from 'react'

export default function Home() {
  return (
    <div>
        <div className='banner row'>
          <div className='col-6'>
            <h2 class="h2_title"><span>грумминг-салон</span> для вашего пушистого друга</h2>
            <div className='card_horizontal'>
              <img className='d-inline-block align-text-top' src={require("../shared/images/home-banner.png")} width="150" height="150" alt="" />
              <p>Наш салон предлагает широкий спектр услуг по уходу за домашними животными, включая стрижку, мытьё, уход за ногтями и ушами, подготовку к выставкам и ежедневный уход. 
                В салоне созданы комфортные условия для животных и их хозяев, 
                а вежливый персонал использует высококачественную косметику, которая придаёт шерсти естественный блеск и здоровье.</p>
            </div>
            <div className='buttons_wrapper'>
              
            </div>
          </div>
        </div>
        <div></div>
    </div>
  )
}
