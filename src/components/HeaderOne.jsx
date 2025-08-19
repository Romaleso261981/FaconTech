"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderOne = () => {
  const router = usePathname();
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <>
      {/* header-area-start */}
      <header
        id='header-sticky'
        className={
          scroll
            ? "header-intro-version-one-area header-area-1 header__sticky"
            : "header-intro-version-one-area header-area-1"
        }
      >
        <div className='auto-container'>
          <div className='row align-items-center'>
            <div className='col-xl-3 col-lg-2 col-md-6 col-6'>
              <div className='logo-area'>
                <div className='logo'>
                  <Link href='home'>
                    <img
                      className='img-fluid'
                      src='assets/img/common/logo-white.png'
                      alt='WebDevStudio'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-6 col-6'>
              <div className='menu-area menu-padding d-none d-lg-block'>
                <div className='main-menu'>
                  <nav>
                    <ul>
                      <li>
                        <Link
                          href='/about'
                          className={router === "/about" ? "active" : ""}
                        >
                          Про Нас
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/blog'
                          className={router === "/blog-grid" ? "active" : ""}
                        >
                          Блог
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/contact'
                          className={router === "/contact" ? "active" : ""}
                        >
                          Контакти
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='side-menu-icon d-lg-none text-end'>
                <Link
                  href='#'
                  className='info-toggle-btn f-right sidebar-toggle-btn'
                  onClick={mobileMenu}
                >
                  <i className='fal fa-bars' />
                </Link>
              </div>
            </div>
            <div className='col-xl-2 col-lg-3 d-none d-lg-block'>
              <div className='d-adjust'>
                <Link className='default-btn' href='/contact'>
                  Замовити Сайт
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}
      {/* sidebar area start */}
      <div
        className={`sidebar__area ${active === true ? "sidebar-opened" : ""} `}
      >
        <div className='sidebar__wrapper'>
          <div className='sidebar__close'>
            <button
              className='sidebar__close-btn'
              id='sidebar__close-btn'
              onClick={mobileMenu}
            >
              <i className='fal fa-times' />
            </button>
          </div>
          <div className='sidebar__content'>
            <div className='sidebar-logo mb-40 mt-40'>
              <Link href='home-1'>
                <img src='assets/img/common/logo-white.png' alt='logo' />
              </Link>
            </div>
            <div className='sidebar__search mb-25'>
              <form action='#'>
                <input type='text' placeholder='Що ви шукаєте?' />
                <button type='submit'>
                  <i className='far fa-search' />
                </button>
              </form>
            </div>
            <nav className='offcanvas-navigation' id='offcanvas-navigation'>
              <ul>
                <li>
                  <Link
                    href='/about'
                    className={router === "/about" ? "active" : ""}
                  >
                    Про Нас
                  </Link>
                </li>
                <li className='has-dropdown'>
                  <Link
                    href='/blog'
                    className={router === "/blog" ? "active" : ""}
                  >
                    Блог
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className={router === "/contact" ? "active" : ""}
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='mobile-footer'>
              <div className='follow'>
                <div className='title'>
                  <h3>Слідкуйте за нами:</h3>
                </div>
                <div className='social one'>
                  <Link href='#'>
                    <i className='fa-brands fa-facebook-f' />
                  </Link>
                  <Link href='#'>
                    <i className='fa-brands fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fa-brands fa-linkedin-in' />
                  </Link>
                  <Link href='#'>
                    <i className='fa-brands fa-instagram' />
                  </Link>
                </div>
              </div>
              <div className='contact'>
                <div className='title'>
                  <h3>Зв'яжіться з нами:</h3>
                </div>
                <ul>
                  <li>
                    <i className='fa-sharp fa-solid fa-location-dot' />
                    Київ, Україна
                  </li>
                  <li>
                    <i className='fa-solid fa-envelope' />
                    ladiginscormag@gmail.com
                  </li>
                  <li>
                    <i className='fa-solid fa-phone' />
                    +380 98 947-87-23
                  </li>
                  <li>
                    <i className='fa-regular fa-globe' />
                    webdevstudio.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar area end */}
      <div className={active ? "body-overlay active" : "body-overlay"} />
    </>
  );
};

export default HeaderOne;
