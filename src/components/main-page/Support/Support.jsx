import styles from './styles.module.scss'
export default function Support() {
	const data = [
		{
			title: 'Обсудим и спланируем',
			desc: 'На какие моменты обратить особое внимание? Какие вопросы нужно решить срочно? Как аккуратно принять дела? Обсудим важные нюансы, наметим и согласуем рамочныйплан действий.',
			src: '/images/benefit/img1.svg',
		},
		{
			title: 'Примем дела',
			desc: 'Заполним анкету данными об элементах ИТ-инфраструктуры, их местонахождении, основных настройках. Примем административные доступы, запустим техподдержкув оперативном режиме.',
			src: '/images/benefit/img2.svg',
		},
		{
			title: 'Защитим информацию',
			desc: 'Установим, где хранятся рабочие каталоги, файлы и базы данных. Выполним аудит и отладку резервного копирования. Примем меры для исключения рисков несанкционированного доступаи потери данных.',
			src: '/images/benefit/img3.svg',
		},
		{
			title: 'Наведем порядок',
			desc: 'Присвоим каждому устройству учетный номер и промаркируем технику. Выполним работы по оптимизации ИТ-инфраструктуры. Перейдем к сопровождению в штатном режиме.',
			src: '/images/benefit/img4.svg',
		},
		{
			title: 'Задокументируем',
			desc: 'Проверим и дополним имеющиеся сведения об ИТ-инфраструктуре, смежных подрядчиках, прочих деталях. Обеспечим актуальность документации в течение всего срока обслуживания.',
			src: '/images/benefit/img4.svg',
		},
	]
	return (
		<>
			<section className={styles.support}>
				<div className={`container ${styles.support_container}`}>
					<h1 className={styles.title}>
						системный подход - фундамент качественной поддержки!
					</h1>
					<ul className={styles.grid}>
						{data.map((item, i) => (
							<li key={item.title}>
								<div className={styles.cart}>
									<div className={styles.cart_count}>{String(i + 1)}</div>
									<div className={styles.cart_text}>
										<h2>{item.title}</h2>
										<p>{item.desc}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}
