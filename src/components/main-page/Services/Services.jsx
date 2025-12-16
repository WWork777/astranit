"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      desc: "1С: внедрение и сопровождение",
      src: "/images/services/img1.png",
    },
    {
      desc: "Размещение сервера в датацентре",
      src: "/images/services/img2.png",
    },
    {
      desc: "Монтаж слаботочных сетей",
      src: "/images/services/img3.png",
    },
    {
      desc: "Видеонаблюдение",
      src: "/images/services/img4.png",
    },
    {
      desc: "СКУД и учет рабочего времени",
      src: "/images/services/img5.png",
    },
    {
      desc: "Офисная телефония",
      src: "/images/services/img6.png",
    },
    {
      desc: "Подключение удаленщиков",
      src: "/images/services/img7.png",
    },
    {
      desc: "Разграничение доступа к файлам",
      src: "/images/services/img8.png",
    },
    {
      desc: "Дублирование Интернет-канала",
      src: "/images/services/img9.png",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className={styles.services}>
      <div className={` ${styles.services_container}`}>
        <h1 className={styles.title}>РЕШЕНИЯ И СЕРВИСЫ</h1>

        {isMobile ? (
          <div className={styles.swiper_container}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[EffectCoverflow]}
              className={styles.swiper}
            >
              {data.map((item, index) => (
                <SwiperSlide key={item.desc} className={styles.swiper_slide}>
                  <div className={styles.cart}>
                    <div className={styles.cart_img}>
                      <img src={item.src} alt={item.desc} />
                    </div>
                    <div className={styles.cart_desc}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <ul className={styles.grid}>
            {data.map((item) => (
              <li key={item.desc}>
                <div className={styles.cart}>
                  <div className={styles.cart_img}>
                    <img src={item.src} alt={item.desc} />
                  </div>
                  <div className={styles.cart_desc}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
