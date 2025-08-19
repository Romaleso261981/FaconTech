"use client";
import Link from "next/link";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const CounterSectionOne = () => {
  return (
    <>
      {/* Counter-section one start */}
      <section
        className='counter-section one'
        style={{
          backgroundImage: "url('/assets/img/bg-image/04_bg-image.jpg')",
        }}
      >
        <div className='auto-container'>
          <div className='award-part ' data-aos='fade-up' data-aos-delay='300'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='title'>
                  <h2>
                    Хочете стати нашими <br /> партнерами?
                  </h2>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='inner-btn d-adjust'>
                  <div>
                    <Link className='default-btn' href='/contact'>
                      Давайте співпрацювати
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='overlay-text'>
              <h1>WEB</h1>
            </div>
            <div className='shape-img'>
              <img
                className='shape-1 poa'
                src='./assets/img/icon/50_icon.png'
                alt='FaconTech'
              />
              <img
                className='shape-2 poa'
                src='./assets/img/icon/51_icon.png'
                alt='FaconTech'
              />
              <img
                className='shape-3 poa'
                src='./assets/img/icon/16_icon.png'
                alt='FaconTech'
              />
              <img
                className='shape-4 poa'
                src='./assets/img/icon/52_icon.png'
                alt='FaconTech'
              />
            </div>
          </div>
          <div className='inner-wrapper'>
            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='left-wrapper '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <div className='title-des'>
                    <h2>Подивіться на наші досягнення компанії</h2>
                    <p>
                      Ми спеціалізуємося на створенні сучасних веб-сайтів та
                      інтернет-магазинів на Next.js та WordPress. Наша команда
                      досвідчених розробників забезпечує високу якість,
                      швидкість та інноваційні рішення для вашого бізнесу.
                    </p>
                  </div>
                  <div className='list'>
                    <ul>
                      <li>
                        <i className='fa-regular fa-chevrons-right' />
                        Розробка швидких та адаптивних сайтів на Next.js з
                        використанням React
                      </li>
                      <li>
                        <i className='fa-regular fa-chevrons-right' />
                        Створення потужних інтернет-магазинів на WordPress та
                        WooCommerce
                      </li>
                      <li>
                        <i className='fa-regular fa-chevrons-right' />
                        SEO-оптимізація та інтеграція з маркетинговими
                        інструментами
                      </li>
                      <li>
                        <i className='fa-regular fa-chevrons-right' />
                        Технічна підтримка та постійне оновлення вашого
                        веб-проекту
                      </li>
                    </ul>
                    <div className='inner-btn d-adjust'>
                      <div>
                        <Link className='default-btn' href='/contact'>
                          Дізнатися більше
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right-wrapper '>
                  <div className='d-sm-flex d-block gap-4'>
                    <div>
                      <div
                        className='item'
                        data-aos='fade-up'
                        data-aos-delay='300'
                      >
                        <div className='count-body'>
                          <h2 className='counter'>
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={8} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className='text'>
                          <h3>Років досвіду</h3>
                        </div>
                      </div>
                      <div
                        className='item mt-30'
                        data-aos='fade-up'
                        data-aos-delay='300'
                      >
                        <div className='count-body'>
                          <h2 className='counter'>
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={450} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className='text'>
                          <h3>Проектів завершено</h3>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div
                        className='item'
                        data-aos='fade-up'
                        data-aos-delay='400'
                      >
                        <div className='count-body'>
                          <h2 className='counter'>
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={25} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className='text'>
                          <h3>Експертів у команді</h3>
                        </div>
                      </div>
                      <div
                        className='item mt-30'
                        data-aos='fade-up'
                        data-aos-delay='400'
                      >
                        <div className='count-body'>
                          <h2 className='counter'>
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={98} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>%</h4>
                        </div>
                        <div className='text'>
                          <h3>Задоволених клієнтів</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='shape-img'>
            <img
              className='shape-5 poa'
              src='./assets/img/icon/53_icon.png'
              alt='FaconTech'
            />
            <img
              className='shape-6 poa'
              src='./assets/img/icon/15_icon.png'
              alt='FaconTech'
            />
            <img
              className='shape-7 poa'
              src='./assets/img/icon/17_icon.png'
              alt='FaconTech'
            />
            <img
              className='shape-8 poa'
              src='./assets/img/icon/54_icon.png'
              alt='FaconTech'
            />
          </div>
        </div>
      </section>
      {/* Counter-section one end */}
    </>
  );
};

export default CounterSectionOne;
