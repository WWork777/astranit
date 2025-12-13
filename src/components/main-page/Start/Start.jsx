import styles from "./styles.module.scss";
import Image from "next/image";

export default function Start() {
  return (
    <section className="container">
      <h2 className={styles.start_title}>ЭФФЕКТИВНЫЙ СТАРТ!</h2>
      <div className={styles.start_container}>
        <div className={styles.start_item}>
          <span>Отчет о состоянии дел</span>
          <p>
            Проведем аудит и предоставим отчет о состоянии вашей компьютерной
            инфраструктуры. Выявим проблемы, влияющие на работу вашей ИТ-системы
            и безопасность данных.
          </p>
          <Image
            src="/svg/start/first.svg"
            alt="report"
            width={75}
            height={125}
          />
        </div>
        <div className={styles.start_item}>
          <span>План действий</span>
          <p>
            Составим и согласуем с вами дорожную карту отладки вашей
            ИТ-инфраструктуры и решения накопившихся вопросов: как тех, с
            которыми вы к нам обратились, так и выявленных в ходе аудита.
          </p>
          <Image
            src="/svg/start/second.svg"
            alt="report"
            width={75}
            height={125}
          />
        </div>
        <div className={styles.start_item}>
          <span>Техподдержка</span>
          <p>
            Ваши сотрудники получат доступ к горячей линии ИТ-поддержки. Мы
            будем решать вопросы пользователей удаленно и на выездах, а вы
            сможете сосредоточиться на ведении бизнеса!
          </p>
          <Image
            src="/svg/start/three.svg"
            alt="report"
            width={75}
            height={125}
          />
        </div>
      </div>
    </section>
  );
}
