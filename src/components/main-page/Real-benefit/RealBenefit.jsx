import styles from "./styles.module.scss";
import Image from "next/image";

export default function RealBenefit() {
  const data = [
    {
      title: "Удобство",
      desc: "У вас Яндекс.Диск вместо файлового сервера? Сотрудники на удаленке подключаются через AnyDesk вместо удаленного рабочего стола? Вместо почты на домене вашей компании пользуетесь почтой @mail.ru? Поможем перейти на решения, которые сделают работу проще и улучшат имидж бизнеса!",
      src: "/images/benefit/img1.svg",
    },
    {
      title: "Быстродействие",
      desc: "Ваша ИТ-инфраструктура будет работать без сбоев благодаря проактивности наших специалистов: источники имеющихся неполадок будут найдены и устранены на начальном этапе обслуживания. А благодаря ежедневному мониторингу мы сможем решать потенциальные проблемы до того, как они повлияют на вашу работу.",
      src: "/images/benefit/img2.svg",
    },
    {
      title: "Стабильность",
      desc: "Ваши сотрудники смогут работать быстрее без раздражающих тормозов и лагов. Мы выявим и ликвидируем факторы, замедляющие работу компьютеров и программ, помогая вашей команде стать более продуктивной!",
      src: "/images/benefit/img3.svg",
    },
    {
      title: "Безопасность",
      desc: "Устраним риски для бизнеса, внедрив меры защиты от вирусов-шифровальщиков, случайных или намеренных действий пользователей, утраты информации в результате сбоя оборудования.",
      src: "/images/benefit/img4.svg",
    },
  ];

  return (
    <section className={styles.benefit}>
      <div className={styles.container}>
        <h1 className={styles.title}>РЕАЛЬНАЯ ПОЛЬЗА - С ПЕРВЫХ ДНЕЙ!</h1>
        <ul className={styles.grid}>
          {data.map((item, index) => (
            <li key={item.title} className={styles.grid_item}>
              <div className={styles.cart}>
                <div className={styles.cart_img}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={250}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cart_text}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className={styles.cart_mobile}>
                <div className={styles.cart_img}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={250}
                    height={250}
                    className={styles.image}
                  />
                  <h2>{item.title}</h2>
                </div>
                <div className={styles.cart_text_mobile}>
                  <p>{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
