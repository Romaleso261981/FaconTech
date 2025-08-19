import Link from "next/link";

const ProjectSectionOne = () => {
  return (
    <>
      {/* Project Section one start */}
      <section className='project-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-12'>
              <div
                className='section-title-shape-one middle '
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3>Наші завершені проекти</h3>
                <h2>
                  Створюємо веб-рішення для <br />
                  <span className='theme-color'>вашого успіху</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='project-wrapper '
                data-aos='fade-right'
                data-aos-delay='300'
              >
                <div className='img-file por'>
                  <img
                    className='img-fluid'
                    src='/assets/img/project-new/01_project.png'
                    alt='FaconTech'
                  />
                  <div className='shape-overlay poa'>
                    <h2>Корпоративний сайт</h2>
                    <p>
                      Сучасний корпоративний сайт для компанії з виробництва
                      електроніки. Адаптивний дизайн, зручна навігація та
                      інтеграція з CRM системою для ефективного управління
                      клієнтами.
                    </p>
                    <div className='d-inline-block'>
                      <Link href='#'>
                        Детальніше <i className='fa-light fa-chevrons-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='project-wrapper '
                data-aos='fade-left'
                data-aos-delay='300'
              >
                <div className='img-file por'>
                  <img
                    className='img-fluid'
                    src='/assets/img/project-new/02_project.png'
                    alt='FaconTech'
                  />
                  <div className='shape-overlay poa'>
                    <h2>Інтернет-магазин одягу</h2>
                    <p>
                      Повнофункціональний e-commerce сайт для магазину модного
                      одягу. Інтеграція платіжних систем, система управління
                      товарами та SEO оптимізація для залучення цільової
                      аудиторії.
                    </p>
                    <div className='d-inline-block'>
                      <Link href='#'>
                        Детальніше <i className='fa-light fa-chevrons-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='project-wrapper '
                data-aos='fade-right'
                data-aos-delay='300'
              >
                <div className='img-file por'>
                  <img
                    className='img-fluid'
                    src='/assets/img/project-new/02_project.png'
                    alt='FaconTech'
                  />
                  <div className='shape-overlay poa'>
                    <h2>Лендінг-сторінка для послуг</h2>
                    <p>
                      Висококонверсійна лендінг-сторінка для компанії з
                      юридичних послуг. Оптимізована для пошукових систем,
                      зручна форма заявки та професійний дизайн для залучення
                      клієнтів.
                    </p>
                    <div className='d-inline-block'>
                      <Link href='#'>
                        Детальніше <i className='fa-light fa-chevrons-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='project-wrapper '
                data-aos='fade-left'
                data-aos-delay='300'
              >
                <div className='img-file por'>
                  <img
                    className='img-fluid'
                    src='/assets/img/project-new/01_project.png'
                    alt='FaconTech'
                  />
                  <div className='shape-overlay poa'>
                    <h2>SEO просування сайту</h2>
                    <p>
                      Комплексне SEO просування для сайту туристичної компанії.
                      Підвищення позицій у пошукових системах, оптимізація
                      контенту та збільшення органічного трафіку на 300%.
                    </p>
                    <div className='d-inline-block'>
                      <Link href='#'>
                        Детальніше <i className='fa-light fa-chevrons-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='inner-btn d-adjust'>
            <div>
              <Link className='default-btn' href='/contact'>
                Переглянути всі проекти
              </Link>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <div className='shape-img-1 poa'>
            <img src='/assets/img/shape/04_shape.png' alt='FaconTech' />
          </div>
          <div className='shape-img-2 poa'>
            <img src='/assets/img/icon/44_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-3 poa'>
            <img src='/assets/img/icon/15_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-4 poa'>
            <img src='/assets/img/icon/45_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-5 poa'>
            <img src='/assets/img/icon/13_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-6 poa'>
            <img src='/assets/img/icon/46_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-7 poa'>
            <img src='/assets/img/icon/47_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-8 poa'>
            <img src='/assets/img/icon/17_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-9 poa'>
            <img src='/assets/img/icon/73_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-10 poa'>
            <img src='/assets/img/icon/76_icon.png' alt='FaconTech' />
          </div>
        </div>
      </section>
      {/* Project Section one end */}
    </>
  );
};

export default ProjectSectionOne;
