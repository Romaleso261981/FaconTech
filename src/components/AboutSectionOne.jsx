import Link from "next/link";

const AboutSectionOne = () => {
  return (
    <>
      {/* About Section one Start */}
      <div className='about-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='left-wrapper '>
                <div className=' img-file '>
                  <img
                    className=' img-fluid '
                    data-aos='fade-up'
                    data-aos-delay='200'
                    src='/assets/img/about-new/01_about.png'
                    alt='FaconTech'
                  />
                  <div
                    className='shape-overlay '
                    data-aos='fade-up'
                    data-aos-delay='300'
                  >
                    <div className='overlay '>
                      <span>
                        <img
                          src='/assets/img/icon/44_icon.png'
                          alt='FaconTech'
                        />
                      </span>
                      <h3>
                        Успішні проекти <br /> З 2010 року
                      </h3>
                      <div className='video-intro '>
                        <Link
                          href='https://www.youtube.com'
                          className='popup-video'
                        >
                          <span className='icon'>
                            <i className='fa-solid fa-play' />
                          </span>
                          <span className='text'>Дивитися портфоліо</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='shape-7 poa'>
                    <img src='/assets/img/icon/69_icon.svg' alt='FaconTech' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='right-wrapper '
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='section-title-shape-one'>
                  <h3>ПРО КОМПАНІЮ</h3>
                  <h2>
                    Створюємо веб-рішення, які приносять реальний результат.
                  </h2>
                  <p>
                    Ми - команда досвідчених розробників та дизайнерів, які
                    спеціалізуються на створенні сучасних веб-сайтів,
                    інтернет-магазинів та SEO просуванні. Наша мета - допомогти
                    вашому бізнесу процвітати в цифровому світі.
                  </p>
                </div>
                <div className='inner-list'>
                  <ul>
                    <li>
                      <span className='img-file'>
                        <img
                          src='/assets/img/icon/11_icon.png'
                          alt='FaconTech'
                        />
                      </span>
                      <div>
                        <h4>100% Успішних проектів</h4>
                        <p>
                          Кожен створений нами сайт - це результат ретельного
                          планування та професійної реалізації. Ми гарантуємо
                          якість, швидкість завантаження та зручність
                          користування для ваших клієнтів.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className='img-file'>
                        <img
                          src='/assets/img/icon/12_icon.png'
                          alt='FaconTech'
                        />
                      </span>
                      <div>
                        <h4>SEO просування та зростання трафіку</h4>
                        <p>
                          Наші SEO стратегії забезпечують стабільне зростання
                          позицій у пошукових системах. Ми оптимізуємо контент,
                          технічні аспекти та створюємо якісні посилання для
                          залучення цільової аудиторії.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='inner-btn'>
                  <div>
                    <Link className='default-btn' href='/contact'>
                      Замовити консультацію
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape-img'>
          <div className='shape-1 poa'>
            <img src='/assets/img/icon/10_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-2 poa'>
            <img src='/assets/img/icon/09_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-3 poa'>
            <img src='/assets/img/shape/01_shape.svg' alt='FaconTech' />
          </div>
          <div className='shape-4 poa'>
            <img src='/assets/img/icon/63_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-5 poa'>
            <img src='/assets/img/icon/66_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-6 poa'>
            <img src='/assets/img/icon/68_icon.png' alt='FaconTech' />
          </div>
        </div>
      </div>
      {/* About Section one End */}
    </>
  );
};

export default AboutSectionOne;
