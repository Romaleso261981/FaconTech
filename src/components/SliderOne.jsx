"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const SliderOne = () => {
  return (
    <>
      {/* slider-area-one-start  */}
      <section className='hero-slider one'>
        <div className='swiper hero-slider-init-one swiper-container swiper-container-fade'>
          <Swiper
            loop={true}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            effect='fade'
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <SwiperSlide>
              <div className='item-slider sliderm-height p-relative swiper-slide'>
                <div
                  className='slide-bg'
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image-new/02_bg-image.png')",
                  }}
                />
                <div className='auto-container'>
                  <div className='row '>
                    <div className='col-xl-7 col-12'>
                      <div className='slider-content-inner '>
                        <div>
                          <h2 className='slider-title'>
                            Створюємо сучасні веб-сайти та
                            <span className='theme-color pl-4'>
                              інтернет-магазини
                            </span>
                          </h2>
                          <p className='description'>
                            Наша команда розробників створює інноваційні
                            веб-рішення, які привертають увагу та конвертують
                            відвідувачів у клієнтів. Від лендінг-сторінок до
                            складних e-commerce платформ - ми реалізуємо ваші
                            найсміливіші ідеї.
                          </p>
                          <div className='inner-btn'>
                            <div>
                              <Link className='default-btn' href='/contact'>
                                Замовити сайт
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-5'>
                      <div className='slider-content-inner-right'>
                        <div className='img-wrapper'>
                          <img
                            src='assets/img/hero-new/01_hero-image.png'
                            alt='FaconTech'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item-slider sliderm-height p-relative swiper-slide'>
                <div
                  className='slide-bg'
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image-new/02_bg-image.png')",
                  }}
                />
                <div className='auto-container'>
                  <div className='row '>
                    <div className='col-xl-7 col-12'>
                      <div className='slider-content-inner '>
                        <div>
                          <h2 className='slider-title'>
                            SEO просування та підвищення
                            <span className='theme-color pl-4'>
                              позицій у пошуку
                            </span>
                          </h2>
                          <p className='description'>
                            Експертне SEO просування вашого сайту для залучення
                            цільової аудиторії з пошукових систем. Оптимізація
                            контенту, технічне SEO та стратегії просування, які
                            гарантують зростання органічного трафіку та
                            конверсій.
                          </p>
                          <div className='inner-btn'>
                            <div>
                              <Link className='default-btn' href='/contact'>
                                Замовити SEO
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-5'>
                      <div className='slider-content-inner-right'>
                        <div className='img-wrapper'>
                          <img
                            src='assets/img/hero-new/ChatGPT Image 15 серп. 2025 р., 14_47_51.png'
                            alt='FaconTech'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item-slider sliderm-height p-relative swiper-slide'>
                <div
                  className='slide-bg'
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image-new/02_bg-image.png')",
                  }}
                />
                <div className='auto-container'>
                  <div className='row '>
                    <div className='col-xl-7 col-12'>
                      <div className='slider-content-inner '>
                        <div>
                          <h2 className='slider-title'>
                            Інтернет-магазини з високою
                            <span className='theme-color pl-4'>конверсією</span>
                          </h2>
                          <p className='description'>
                            Розробка інтернет-магазинів з сучасним дизайном та
                            зручною навігацією. Інтеграція платіжних систем,
                            управління товарами та аналітика продажів. Створюємо
                            магазини, які продають 24/7 та приносять реальний
                            прибуток.
                          </p>
                          <div className='inner-btn'>
                            <div>
                              <Link className='default-btn' href='/contact'>
                                Створити магазин
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-5'>
                      <div className='slider-content-inner-right'>
                        <div className='img-wrapper'>
                          <img
                            src='assets/img/hero-new/03_hero-image.png'
                            alt='FaconTech'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* If we need navigation buttons */}
          <div
            id='swiper-button-prev'
            className='swiper-button-prev hero-button'
          >
            <i className='fa-regular fa-angles-left' />
          </div>
          <div
            id='swiper-button-next'
            className='swiper-button-next hero-button'
          >
            <i className='fa-regular fa-angles-right' />
          </div>
          {/* Shape Image */}
          <div className='shape-image'>
            <div className='inner-shape-1 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/01_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-2 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/02_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-3 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/03_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-4 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/04_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-5 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/04_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-6 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/06_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-7 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/07_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-8 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/08_icon.png'
                alt='FaconTech'
              />
            </div>
            <div className='inner-shape-9 poa'>
              <img
                className='img-fluid'
                src='assets/img/icon/27_icon.png'
                alt='FaconTech'
              />
            </div>
          </div>
        </div>
      </section>
      {/* slider-area-one-end */}
    </>
  );
};

export default SliderOne;
