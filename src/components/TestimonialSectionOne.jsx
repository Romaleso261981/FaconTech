"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const TestimonialSectionOne = () => {
  return (
    <>
      {/* Testimonial Section one start*/}
      <section
        className='testimonial-section one'
        data-background='/assets/img/shape/03_shape.svg'
      >
        <div className='auto-container'>
          <div className='row'>
            <div className='col-12'>
              <div
                className='section-title-shape-one middle '
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3>Отримайте наші чудові відгуки</h3>
                <h2>
                  Що говорять про нашу <br />
                  <span className='theme-color'>Підтримку та послуги</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row por'>
            <div className='swiper swiper-container testimonial-one'>
              <div className='swiper-wrapper'>
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className='mySwiper'
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='swiper-slide'>
                      <div className='inner-wrapper'>
                        <div className='intro-body'>
                          <div className='img-file'>
                            <img
                              src='/assets/img/testimonial/01_testimonial-profile.png'
                              alt='FaconTech'
                            />
                          </div>
                          <div className='text-file'>
                            <h3>Олександр Петренко</h3>
                            <h5>Директор компанії "ТехноСерв"</h5>
                          </div>
                        </div>
                        <div className='review'>
                          <p>
                            FaconTech створив для нас потужний інтернет-магазин
                            на WordPress з WooCommerce. Сайт працює швидко, має
                            зручне управління та привабливий дизайн. Клієнти
                            залишають тільки позитивні відгуки про зручність
                            покупок. Рекомендую!
                          </p>
                          <div className='star'>
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                          </div>
                          <div className='shape'>
                            <span>
                              <i className='fa-sharp fa-solid fa-quote-right' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-slide'>
                      <div className='inner-wrapper'>
                        <div className='intro-body'>
                          <div className='img-file'>
                            <img
                              src='/assets/img/testimonial/02_testimonial-profile.png'
                              alt='FaconTech'
                            />
                          </div>
                          <div className='text-file'>
                            <h3>Марія Коваленко</h3>
                            <h5>Менеджер з маркетингу "ЕкоМаркет"</h5>
                          </div>
                        </div>
                        <div className='review'>
                          <p>
                            Завдяки FaconTech наш бізнес вийшов на новий рівень.
                            Вони розробили сучасний корпоративний сайт на
                            Next.js з інтеграцією CRM системи. Технічна
                            підтримка на найвищому рівні - завжди готові
                            допомогти та внести необхідні зміни.
                          </p>
                          <div className='star'>
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-regular fa-star' />
                          </div>
                          <div className='shape'>
                            <span>
                              <i className='fa-sharp fa-solid fa-quote-right' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-slide'>
                      <div className='inner-wrapper'>
                        <div className='intro-body'>
                          <div className='img-file'>
                            <img
                              src='/assets/img/testimonial/03_testimonial-profile.png'
                              alt='FaconTech'
                            />
                          </div>
                          <div className='text-file'>
                            <h3>Дмитро Іваненко</h3>
                            <h5>Засновник стартапу "ІнноваТек"</h5>
                          </div>
                        </div>
                        <div className='review'>
                          <p>
                            FaconTech допоміг нам створити унікальну платформу
                            для онлайн-навчання. Використання Next.js
                            забезпечило швидкість та масштабованість. Команда
                            професіоналів, які розуміють потреби бізнесу та
                            впроваджують найкращі практики розробки.
                          </p>
                          <div className='star'>
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                          </div>
                          <div className='shape'>
                            <span>
                              <i className='fa-sharp fa-solid fa-quote-right' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-slide'>
                      <div className='inner-wrapper'>
                        <div className='intro-body'>
                          <div className='img-file'>
                            <img
                              src='/assets/img/testimonial/04_testimonial-profile.png'
                              alt='FaconTech'
                            />
                          </div>
                          <div className='text-file'>
                            <h3>Анна Шевченко</h3>
                            <h5>Власниця бутіку "ЕлегантСтиль"</h5>
                          </div>
                        </div>
                        <div className='review'>
                          <p>
                            Вражена якістю роботи FaconTech! Вони створили для
                            мого бутіку стильний інтернет-магазин на WordPress з
                            WooCommerce. Сайт має інтуїтивно зрозумілий
                            інтерфейс, зручне управління товарами та інтеграцію
                            з платіжними системами. Продажі зросли на 40%!
                          </p>
                          <div className='star'>
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                            <i className='fa-solid fa-star' />
                          </div>
                          <div className='shape'>
                            <span>
                              <i className='fa-sharp fa-solid fa-quote-right' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className='arrow'>
              <div
                id='swiper-button-next'
                className=' testimonialOne-button-next testimonialOne-button'
              >
                <i className='fa-solid fa-chevrons-left' />
              </div>
              <div
                id='swiper-button-prev'
                className=' testimonialOne-button-prev testimonialOne-button'
              >
                <i className='fa-solid fa-chevrons-right' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape-image'>
          <img
            className='shape-1 poa'
            src='/assets/img/icon/17_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-2 poa'
            src='/assets/img/icon/16_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-3 poa'
            src='/assets/img/icon/15_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-4 poa'
            src='/assets/img/icon/03_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-5 poa'
            src='/assets/img/icon/29_icon.png'
            alt='FaconTech'
          />
          <img
            className='shape-6 poa'
            src='/assets/img/icon/41_icon.png'
            alt='FaconTech'
          />
        </div>
      </section>
      {/* Testimonial Section one end*/}
    </>
  );
};

export default TestimonialSectionOne;
