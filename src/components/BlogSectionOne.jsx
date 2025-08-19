import Link from "next/link";

const BlogSectionOne = () => {
  return (
    <>
      {/* Blog Section one start */}
      <section className='blog-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-12'>
              <div
                className='section-title-shape-one middle '
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3>Наш останній блог</h3>
                <h2>
                  Знайдіть найновіші новини з блогу <br />
                  <span className='theme-color'>від FaconTech</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='blog-items '
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='img-file'>
                  <img
                    className='img-fluid'
                    src='/assets/img/blog/01_blog.jpg'
                    alt='FaconTech'
                  />
                </div>
                <div className='text-file'>
                  <div className='intro'>
                    <div className='d-flex gap-3 align-items-center'>
                      <div className='dp-img'>
                        <img
                          src='/assets/img/testimonial/01_testimonial-profile.png'
                          alt='FaconTech'
                        />
                      </div>
                      <div>
                        <p className='admin'>О. Петренко</p>
                      </div>
                    </div>
                    <div>
                      <div className='date d-flex gap-2 align-items-center'>
                        <span>
                          <i className='fa-solid fa-calendar-days' />
                        </span>
                        <span>15.08.2024</span>
                      </div>
                    </div>
                  </div>
                  <div className='title'>
                    <h2>
                      <Link href='#'>
                        Професійна інформація про веб-розробку.
                      </Link>
                    </h2>
                    <p>
                      Дізнайтеся про найкращі практики створення сучасних
                      веб-сайтів та інтернет-магазинів на Next.js та WordPress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='blog-items '
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='img-file'>
                  <img
                    className='img-fluid'
                    src='/assets/img/blog/02_blog.jpg'
                    alt='FaconTech'
                  />
                </div>
                <div className='text-file'>
                  <div className='intro'>
                    <div className='d-flex gap-3 align-items-center'>
                      <div className='dp-img'>
                        <img
                          src='/assets/img/testimonial/02_testimonial-profile.png'
                          alt='FaconTech'
                        />
                      </div>
                      <div>
                        <p className='admin'>М. Коваленко</p>
                      </div>
                    </div>
                    <div>
                      <div className='date d-flex gap-2 align-items-center'>
                        <span>
                          <i className='fa-solid fa-calendar-days' />
                        </span>
                        <span>12.08.2024</span>
                      </div>
                    </div>
                  </div>
                  <div className='title'>
                    <h2>
                      <Link href='#'>
                        Ми пропонуємо послуги з розробки сайтів та e-commerce.
                      </Link>
                    </h2>
                    <p>
                      Розгляньте наші рішення для створення потужних
                      інтернет-магазинів та корпоративних веб-сайтів з
                      використанням сучасних технологій.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='blog-items '
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='img-file'>
                  <img
                    className='img-fluid'
                    src='/assets/img/blog/03_blog.jpeg'
                    alt='FaconTech'
                  />
                </div>
                <div className='text-file'>
                  <div className='intro'>
                    <div className='d-flex gap-3 align-items-center'>
                      <div className='dp-img'>
                        <img
                          src='/assets/img/testimonial/04_testimonial-profile.png'
                          alt='FaconTech'
                        />
                      </div>
                      <div>
                        <p className='admin'>Д. Іваненко</p>
                      </div>
                    </div>
                    <div>
                      <div className='date d-flex gap-2 align-items-center'>
                        <span>
                          <i className='fa-solid fa-calendar-days' />
                        </span>
                        <span>10.08.2024</span>
                      </div>
                    </div>
                  </div>
                  <div className='title'>
                    <h2>
                      <Link href='#'>
                        E-commerce рішення - це колекція готових рішень.
                      </Link>
                    </h2>
                    <p>
                      Огляд найкращих плагінів та модулів для створення
                      функціональних інтернет-магазинів на WordPress та Next.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='inner-btn d-adjust'>
            <div>
              <Link className='default-btn' href='#'>
                Переглянути більше блогів
              </Link>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <img
            className='shape-1 poa'
            src='/assets/img/shape/05_shape.png'
            alt='FaconTech'
          />
          <img
            className='shape-2 poa'
            src='/assets/img/icon/58_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-3 poa'
            src='/assets/img/icon/59_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-4 poa'
            src='/assets/img/icon/09_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-5 poa'
            src='/assets/img/icon/43_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-6 poa'
            src='/assets/img/icon/78_icon.png'
            alt='FaconTech'
          />
        </div>
      </section>
      {/* Blog Section one end */}
    </>
  );
};

export default BlogSectionOne;
