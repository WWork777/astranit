import styles from "./styles.module.scss";
import Image from "next/image";

export default function UnderHero() {
  return (
    <section className="container">
      <div className={styles.underhero_container}>
        <div className={styles.underhero_item}>
          <Image
            src="/svg/underhero/first.svg"
            alt="specialists"
            width={120}
            height={120}
          />
          <span>Грамотные специалисты</span>
          <p>
            Благодаря тщательному отбору, тестированию и стажировке в нашей
            компании нет студентов и неопытных сотрудников. Только грамотные
            специалисты с многолетней практикой в ИТ.
          </p>
        </div>
        <div className={styles.underhero_item}>
          <Image
            src="/svg/underhero/second.svg"
            alt="reaction"
            width={120}
            height={120}
          />
          <span>Мгновенная реакция</span>
          <p>
            Начинаем работу с большинством заявок сразу после поступления.
            Срочные выезды к заказчику выполняем в течение 90 минут.
          </p>
        </div>
        <div className={styles.underhero_item}>
          <Image
            src="/svg/underhero/three.svg"
            alt="service"
            width={120}
            height={120}
          />
          <span>Сервис 24/7</span>
          <p>
            Приступаем к устранению критической аварии в любое время суток.
            Работы, требующие остановку сервера и других узловых элементов,
            запланируем на вечернее время или выходной день.
          </p>
        </div>
      </div>
    </section>
  );
}
