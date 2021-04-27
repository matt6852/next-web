import React from 'react'
import headerStyle from "../styles/Header.module.css";


const Header = () => {
    return (
      <header id ="header" className={headerStyle.header_container}>
        <section className={headerStyle.header_container_title}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={headerStyle.header_btn_container}>
            <button>Записаться на просмотр</button>{" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </section>
      </header>
    );
}

export default Header