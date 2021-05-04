import React from 'react'
import navStyle from "../styles/Nav.module.scss"
import Link from "next/link"

const Nav = () => {
    return (
      <nav className={navStyle.nav}>
        <ul className={navStyle.nav_links}>
          <li className={navStyle.nav_logo}>
            <Link href="#header">Logo</Link>
          </li>
          <li>
            <Link href="/">Расположение</Link>
          </li>
          <li>
            <Link href="#section-1">Характеристики</Link>
          </li>
          <li>
            <Link href="/contacts">Генплан</Link>
          </li>
          <li>
            <Link href="/contacts">Фотогалерея</Link>
          </li>
          <li>
            <Link href="/contacts">Оплата</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
          <li className={navStyle.nav_contact}>
            <Link href="/contacts">
              <p>
                +7 (123) 456-78-90 <span>example@gmail.com</span>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav
