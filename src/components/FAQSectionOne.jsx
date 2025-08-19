"use client";
const FAQSectionOne = () => {
  return (
    <>
      <section className='faq-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-6 pe-4'>
              <div
                className='section-title-shape-one left '
                data-aos='fade-right'
                data-aos-delay='300'
              >
                <h3>Часті питання про веб-розробку</h3>
                <h2>
                  Професійна розробка <br />
                  <span className='theme-color'>веб-сайтів</span>
                </h2>
                <p>
                  Ми створюємо сучасні веб-рішення, які допомагають вашому
                  бізнесу процвітати в цифровому світі. Від простих сайтів до
                  складних інтернет-магазинів - кожен проект виконується з
                  урахуванням ваших потреб та цілей.
                </p>
              </div>
              <div
                className='img-file '
                data-aos='fade-right'
                data-aos-delay='500'
              >
                <img
                  className='img-fluid'
                  src='/assets/img/tech-new/01_tech.png'
                  alt='FaconTech'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='faq-inner '
                data-aos='fade-left'
                data-aos-delay='300'
              >
                <div className='icon-shape'>
                  <img
                    className='img-fluid'
                    src='/assets/img/icon/23_icon.png'
                    alt='FaconTech'
                  />
                </div>
                <div className='intro'>
                  <h3>Питання та відповіді</h3>
                </div>
                <div className='faq-list'>
                  <div
                    className='accordion accordion-flush'
                    id='accordionFlushExample'
                  >
                    <div className='accordion-item'>
                      <h2 className='accordion-header'>
                        <button
                          className='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseOne'
                          aria-expanded='false'
                          aria-controls='flush-collapseOne'
                        >
                          Скільки часу займає розробка сайту?
                        </button>
                      </h2>
                      <div
                        id='flush-collapseOne'
                        className='accordion-collapse collapse show'
                        data-bs-parent='#accordionFlushExample'
                      >
                        <div className='accordion-body'>
                          Час розробки залежить від складності проекту. Простий
                          лендінг-сайт може бути готовий за 2-3 тижні,
                          корпоративний сайт - за 4-6 тижнів, а інтернет-магазин
                          - за 6-10 тижнів. Ми завжди дотримуємося узгоджених
                          термінів та інформуємо про прогрес роботи на кожному
                          етапі.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseTwo'
                          aria-expanded='false'
                          aria-controls='flush-collapseTwo'
                        >
                          Чи потрібен мені інтернет-магазин чи звичайний сайт?
                        </button>
                      </h2>
                      <div
                        id='flush-collapseTwo'
                        className='accordion-collapse collapse'
                        data-bs-parent='#accordionFlushExample'
                      >
                        <div className='accordion-body'>
                          Це залежить від ваших цілей. Якщо ви хочете продавати
                          товари онлайн - потрібен інтернет-магазин. Для
                          презентації послуг та залучення клієнтів достатньо
                          корпоративного сайту. Ми допоможемо визначити
                          оптимальне рішення під ваші потреби та бюджет.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#flush-collapseThree'
                          aria-expanded='false'
                          aria-controls='flush-collapseThree'
                        >
                          Як SEO просування допоможе моєму бізнесу?
                        </button>
                      </h2>
                      <div
                        id='flush-collapseThree'
                        className='accordion-collapse collapse'
                        data-bs-parent='#accordionFlushExample'
                      >
                        <div className='accordion-body'>
                          SEO просування забезпечує зростання органічного
                          трафіку з пошукових систем, що призводить до
                          збільшення кількості клієнтів та продажів. Ми
                          оптимізуємо контент, технічні аспекти сайту та
                          створюємо якісні посилання для підвищення позицій у
                          Google та інших пошуковиках.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <div className='shape-img-1 poa'>
            <img src='/assets/img/icon/21_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-2 poa'>
            <img src='/assets/img/icon/64_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-3 poa'>
            <img src='/assets/img/icon/22_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-4 poa'>
            <img src='/assets/img/icon/08_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-5 poa'>
            <img src='/assets/img/icon/26_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-6 poa'>
            <img src='/assets/img/icon/43_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-7 poa'>
            <img src='/assets/img/icon/68_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-8 poa'>
            <img src='/assets/img/icon/71_icon.png' alt='FaconTech' />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSectionOne;
