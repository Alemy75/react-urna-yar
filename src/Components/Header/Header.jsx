import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className='container'>
        <div className='header-button'>
          <img src="./img/button.png" alt="button" />
        </div>
        <div className='header-logo'>
          <h2>УрнаЯр</h2>
          <p>Лучшие урны в Ярославле</p>
        </div>
        <div className='header-contacts'>
          <h2>+7 (922) 264-59-56</h2>
          <p>mail@mail.ru</p>
        </div>
        <div className='header-address'>
          <h2>ул Пушкина д. 5</h2>
          <p>Пн-Пт 9-17</p>
        </div>
      </div>
    </div>
  )
}

export default Header
