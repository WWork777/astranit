import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <Link href="#">
          <Image
            src="/logo/logo.svg"
            alt="astrinit logo"
            width={200}
            height={50}
          />
        </Link>
      </div>
      <div className={styles.nav_container}>
        <Link href="#" className={styles.nav_link}>
          ИТ-ПОДДЕРЖКА
        </Link>
        <Link href="#" className={styles.nav_link}>
          ТАРИФЫ
        </Link>
        <Link href="#" className={styles.nav_link}>
          РЕШЕНИЯ
        </Link>
        <Link href="#" className={styles.nav_link}>
          КОНТАКТЫ
        </Link>
      </div>
      <div className={styles.socials_container}>
        <Link href="tel:+78123363646" className={styles.phone_link}>
          (812) 336 36 46
        </Link>
        <div className={styles.socials_links}>
          <Link href="#">
            <Image src="/svg/socials/tg.svg" alt="tg" width={35} height={35} />
          </Link>
          <Link href="#">
            <Image src="/svg/socials/wa.svg" alt="wa" width={35} height={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}
