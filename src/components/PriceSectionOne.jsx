const PriceSectionOne = () => {
  return (
    <>
      {/* Pricing Section one start */}
      <section className='price-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div
                className='section-title-shape-one left '
                data-aos='fade-right'
                data-aos-delay='300'
              >
                <h3>Що ми пропонуємо </h3>
                <h2>
                  Наші найкращі ціни <br />
                  <span className='theme-color'>Для вас</span>
                </h2>
                <p>
                  Ми пропонуємо гнучкі тарифи для розробки веб-сайтів та
                  інтернет-магазинів. Виберіть план, який найкраще підходить для
                  вашого бізнесу та бюджету. Всі наші рішення включають технічну
                  підтримку та оновлення.
                </p>
              </div>
            </div>
          </div>
          <div className='price-body'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='price-inner down '
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <div className='price'>
                    <h4>₴</h4>
                    <h2>15,000</h2>
                    <h5>/ПРОЕКТ</h5>
                  </div>
                  <div className='plan'>
                    <h2>Базовий сайт</h2>
                    <div className='list'>
                      <ul>
                        <li>Лендінг-сторінка або простий сайт</li>
                        <li>Адаптивний дизайн для всіх пристроїв</li>
                        <li>Базове SEO-налаштування</li>
                        <li className='deep'>Форма зворотного зв'язку</li>
                        <li className='deep'>Базова аналітика та інтеграція</li>
                        <li className='deep'>Технічна підтримка 3 місяці</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='price-inner '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <div className='price'>
                    <h4>₴</h4>
                    <h2>35,000</h2>
                    <h5>/ПРОЕКТ</h5>
                  </div>
                  <div className='plan'>
                    <h2>Інтернет-магазин</h2>
                    <div className='list'>
                      <ul>
                        <li>Повнофункціональний інтернет-магазин</li>
                        <li>WordPress + WooCommerce або Next.js</li>
                        <li>Система оплати та доставки</li>
                        <li>Управління товарами та категоріями</li>
                        <li>SEO-оптимізація та маркетинг</li>
                        <li className='deep'>Технічна підтримка 6 місяців</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div
                  className='price-inner down '
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <div className='price'>
                    <h4>₴</h4>
                    <h2>75,000</h2>
                    <h5>/ПРОЕКТ</h5>
                  </div>
                  <div className='plan'>
                    <h2>Корпоративний портал</h2>
                    <div className='list'>
                      <ul>
                        <li>Складний корпоративний сайт</li>
                        <li>Інтеграція з CRM та ERP системами</li>
                        <li>Мультимовність та локалізація</li>
                        <li>Розширена аналітика та звітність</li>
                        <li>API розробка та інтеграція</li>
                        <li>Технічна підтримка 12 місяців</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <img
            className='shape-1 poa'
            src='/assets/img/icon/55_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-2 poa'
            src='/assets/img/icon/47_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-3 poa'
            src='/assets/img/icon/43_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-4 poa'
            src='/assets/img/icon/28_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-5 poa'
            src='/assets/img/icon/07_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-6 poa'
            src='/assets/img/icon/15_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-7 poa'
            src='/assets/img/shape/01_shape.svg'
            alt='FaconTech'
          />
          <img
            className='shape-8 poa'
            src='/assets/img/icon/21_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-9 poa'
            src='/assets/img/icon/17_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-10 poa'
            src='/assets/img/icon/78_icon.png'
            alt='FaconTech'
          />
        </div>
      </section>
      {/* Pricing Section one end */}
    </>
  );
};

export default PriceSectionOne;
