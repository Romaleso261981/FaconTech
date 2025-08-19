import Link from "next/link";

const FooterSectionOne = () => {
  return (
    <>
      {/* footer section one start */}
      <footer className='footer-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-5 col-md-6 col-12'>
              <div className='footer-wrapper one'>
                <div className='logo' data-aos='fade-up' data-aos-delay='200'>
                  <img
                    src='/assets/img/common/logo-white.png'
                    alt='FaconTech'
                  />
                </div>
                <div className='des' data-aos='fade-up' data-aos-delay='300'>
                  <p>
                    FaconTech - це компанія, яка спеціалізується на створенні
                    сучасних веб-сайтів та інтернет-магазинів. Ми використовуємо
                    найновіші технології Next.js та WordPress для розробки
                    швидких, адаптивних та функціональних рішень для вашого
                    бізнесу.
                  </p>
                </div>
                <div
                  className='social one'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
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
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <div className='footer-wrapper two mt-4 mt-md-0'>
                <h2 className='title' data-aos='fade-up' data-aos-delay='200'>
                  Швидкі посилання
                </h2>
                <ul data-aos='fade-up' data-aos-delay='300'>
                  <li>
                    <Link href='#'>Про нас</Link>
                  </li>
                  <li>
                    <Link href='#'>Послуги</Link>
                  </li>
                  <li>
                    <Link href='#'>Блог</Link>
                  </li>
                  <li>
                    <Link href='#'>Тарифні плани</Link>
                  </li>
                  <li>
                    <Link href='#'>Наша команда</Link>
                  </li>
                  <li>
                    <Link href='#'>Всі проекти</Link>
                  </li>
                  <li>
                    <Link href='#'>Контакти</Link>
                  </li>
                  <li>
                    <Link href='#'>Умови та положення</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              <div className='footer-wrapper two mt-4 mt-lg-0 '>
                <h2 className='title' data-aos='fade-up' data-aos-delay='200'>
                  Веб-послуги
                </h2>
                <ul data-aos='fade-up' data-aos-delay='300'>
                  <li>
                    <Link href='#'>Розробка сайтів</Link>
                  </li>
                  <li>
                    <Link href='#'>Інтернет-магазини</Link>
                  </li>
                  <li>
                    <Link href='#'>Корпоративні портали</Link>
                  </li>
                  <li>
                    <Link href='#'>E-commerce рішення</Link>
                  </li>
                  <li>
                    <Link href='#'>WordPress розробка</Link>
                  </li>
                  <li>
                    <Link href='#'>Next.js розробка</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='footer-wrapper three mt-4 mt-lg-0'>
                <h2 className='title' data-aos='fade-up' data-aos-delay='200'>
                  Зв'яжіться з нами
                </h2>
                <ul data-aos='fade-up' data-aos-delay='300'>
                  <li>м. Київ, вул. Хрещатик, 1</li>
                  <li>ladiginscormag@gmail.com</li>
                  <li className='phone'>+38 (098) 947-87-23</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div
                className='footer-bottom'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <p>Copyright © 2025 WebTech, Всі права захищені.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <img
            className='shape-1 poa'
            src='/assets/img/icon/26_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-2 poa'
            src='/assets/img/shape/08_shape.png'
            alt='FaconTech'
          />
        </div>
      </footer>
      {/* footer section one end */}
    </>
  );
};

export default FooterSectionOne;
