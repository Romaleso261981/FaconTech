import Link from "next/link";

const ServiceSectionOne = () => {
  return (
    <>
      {/* Service Section One Start */}
      <section
        className='service-section one'
        data-background='/assets/img/shape/03_shape.svg'
      >
        <div className='auto-container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title-shape-one middle '>
                <h3 data-aos='fade-up' data-aos-delay='200'>
                  Наші послуги
                </h3>
                <h2 data-aos='fade-up' data-aos-delay='300'>
                  Професійна розробка сайтів та <br />
                  <span className='theme-color'>веб-рішень</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/31_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>Розробка веб-сайтів</Link>
                    </h3>
                    <p>
                      Створюємо сучасні, адаптивні веб-сайти з унікальним
                      дизайном. Від лендінг-сторінок до корпоративних порталів -
                      кожен проект виконується з урахуванням ваших потреб.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/32_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>Інтернет-магазини</Link>
                    </h3>
                    <p>
                      Розробляємо потужні e-commerce платформи з інтуїтивною
                      навігацією, платіжними системами та системою управління
                      товарами для максимальної конверсії.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/33_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>SEO просування</Link>
                    </h3>
                    <p>
                      Комплексне SEO просування для підвищення позицій у
                      пошукових системах. Оптимізація контенту, технічне SEO та
                      стратегії залучення органічного трафіку.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/34_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>UI/UX дизайн</Link>
                    </h3>
                    <p>
                      Створюємо інтуїтивні та привабливі інтерфейси, які
                      забезпечують відмінний користувацький досвід та збільшують
                      конверсію вашого сайту.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/35_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>Технічна підтримка</Link>
                    </h3>
                    <p>
                      Надаємо постійну технічну підтримку та обслуговування
                      веб-сайтів. Моніторинг продуктивності, оновлення безпеки
                      та швидке вирішення проблем.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='section-wrapper'>
                <div
                  className='wrapper-inner one '
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <div className='img-file'>
                    <img src='/assets/img/icon/40_icon.png' alt='FaconTech' />
                  </div>
                  <div className='text-file'>
                    <h3>
                      <Link href='#'>Аналітика та звіти</Link>
                    </h3>
                    <p>
                      Налаштовуємо системи аналітики для відстеження
                      ефективності вашого сайту. Детальні звіти по трафіку,
                      конверсії та поведінці користувачів.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='inner-btn d-adjust'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <div>
            <Link className='default-btn' href='/contact'>
              Переглянути всі послуги
            </Link>
          </div>
        </div>
        <div className='shape-image'>
          <div className='shape-1 poa'>
            <img src='/assets/img/icon/13_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-2 poa'>
            <img src='/assets/img/icon/28_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-3 poa'>
            <img src='/assets/img/icon/41_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-4 poa'>
            <img src='/assets/img/icon/02_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-5 poa'>
            <img src='/assets/img/icon/42_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-6 poa'>
            <img src='/assets/img/icon/43_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-7 poa'>
            <img src='/assets/img/icon/70_icon.svg' alt='FaconTech' />
          </div>
        </div>
      </section>
      {/* Service Section One End */}
    </>
  );
};

export default ServiceSectionOne;
