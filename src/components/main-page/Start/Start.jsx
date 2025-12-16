import Image from "next/image";
import styles from "./styles.module.scss";

export default function Start() {
  return (
    <section className={styles.start}>
      <div className={styles.container}>
        <h2 className={styles.start_title}>ЭФФЕКТИВНЫЙ СТАРТ!</h2>
        <div className={styles.start_container}>
          <div className={styles.start_item}>
            <div className={styles.item_content}>
              <div className={styles.text_wrapper}>
                <span className={styles.item_title}>Отчет о состоянии дел</span>
                <p className={styles.item_description}>
                  Проведем аудит и предоставим отчет о состоянии вашей
                  компьютерной инфраструктуры. Выявим проблемы, влияющие на
                  работу вашей ИТ-системы и безопасность данных.
                </p>
              </div>
              <div className={styles.image_wrapper}>
                <Image
                  src="/svg/start/first.svg"
                  alt="report"
                  width={75}
                  height={125}
                  className={styles.item_image}
                />
              </div>
            </div>
          </div>
          <div className={styles.start_item}>
            <div className={styles.item_content}>
              <div className={styles.text_wrapper}>
                <span className={styles.item_title}>План действий</span>
                <p className={styles.item_description}>
                  Составим и согласуем с вами дорожную карту отладки вашей
                  ИТ-инфраструктуры и решения накопившихся вопросов: как тех, с
                  которыми вы к нам обратились, так и выявленных в ходе аудита.
                </p>
              </div>
              <div className={styles.image_wrapper}>
                <Image
                  src="/svg/start/second.svg"
                  alt="report"
                  width={75}
                  height={125}
                  className={styles.item_image}
                />
              </div>
            </div>
          </div>
          <div className={styles.start_item}>
            <div className={styles.item_content}>
              <div className={styles.text_wrapper}>
                <span className={styles.item_title}>Техподдержка</span>
                <p className={styles.item_description}>
                  Ваши сотрудники получат доступ к горячей линии ИТ-поддержки.
                  Мы будем решать вопросы пользователей удаленно и на выездах, а
                  вы сможете сосредоточиться на ведении бизнеса!
                </p>
              </div>
              <div className={styles.image_wrapper}>
                <Image
                  src="/svg/start/three.svg"
                  alt="report"
                  width={75}
                  height={125}
                  className={styles.item_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
