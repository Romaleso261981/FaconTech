"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamSectionOne = () => {
  return (
    <>
      {/* Team Section one start */}
      <section className='team-section one'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div
                className='section-title-shape-one left '
                data-aos='fade-right'
                data-aos-delay='300'
              >
                <h3>Познайомтеся з нашою командою експертів</h3>
                <h2>
                  Зустріньте нашу ідеальну <br />
                  <span className='theme-color'>Команду</span>
                </h2>
                <p>
                  Наша команда досвідчених розробників спеціалізується на
                  створенні сучасних веб-сайтів та інтернет-магазинів на Next.js
                  та WordPress, забезпечуючи високу якість та інноваційні
                  рішення.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='swiper swiper-container team-one'>
              <div className='swiper-wrapper'>
                <Swiper
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className='mySwiper'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    500: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/01_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Олександр Петренко</h3>
                                <p>
                                  Team Lead / Senior Full-Stack Developer <br />
                                  Next.js, React, Node.js
                                </p>
                                <p>oleksandr@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/02_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Марія Коваленко</h3>
                                <p>
                                  WordPress Developer / UI/UX Designer <br />
                                  WordPress, WooCommerce, Figma
                                </p>
                                <p>maria@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/03_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Дмитро Іваненко</h3>
                                <p>
                                  Frontend Developer / React Specialist <br />
                                  React, TypeScript, Next.js
                                </p>
                                <p>dmytro@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/04_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Анна Шевченко</h3>
                                <p>
                                  E-commerce Specialist / Project Manager <br />
                                  WooCommerce, Shopify, Project Management
                                </p>
                                <p>anna@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/05_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Віктор Морозов</h3>
                                <p>
                                  Backend Developer / DevOps Engineer <br />
                                  Node.js, Docker, AWS, Database Design
                                </p>
                                <p>viktor@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className='inner-wrapper '>
                        <div className='img-file'>
                          <img
                            className='img-fluid'
                            src='/assets/img/team/06_team.png'
                            alt='FaconTech'
                          />
                          <div className='shape-overlay'>
                            <div className='inner-data'>
                              <div>
                                <h3>Юлія Ткаченко</h3>
                                <p>
                                  Digital Marketing Specialist <br />
                                  SEO, PPC, Content Strategy, Analytics
                                </p>
                                <p>yulia@facontech.com</p>
                              </div>
                              <div className='social one'>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* If we need pagination */}
          </div>
        </div>
        <div className='shape-image'>
          <div className='shape-img-1 poa'>
            <img src='/assets/img/icon/48_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-2 poa'>
            <img src='/assets/img/icon/28_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-3 poa'>
            <img src='/assets/img/icon/43_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-4 poa'>
            <img src='/assets/img/icon/15_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-5 poa'>
            <img src='/assets/img/icon/17_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-6 poa'>
            <img src='/assets/img/icon/49_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-7 poa'>
            <img src='/assets/img/icon/62_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-8 poa'>
            <img src='/assets/img/icon/75_icon.png' alt='FaconTech' />
          </div>
          <div className='shape-img-9 poa'>
            <img src='/assets/img/icon/78_icon.png' alt='FaconTech' />
          </div>
        </div>
      </section>
      {/* Team Section one end */}
    </>
  );
};

export default TeamSectionOne;
