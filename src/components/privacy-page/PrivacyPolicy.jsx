import styles from './styles.module.scss'

export default function PrivacyPolicy() {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
				<div className={styles.dateInfo}>Версия от 01 января 2026 года</div>
			</div>

			<div className={styles.contentWrapper}>
				{/* Вводный текст */}
				<div className={styles.section}>
					<div className={styles.sectionContent}>
						<p className={styles.paragraph}>
							Настоящая Политика конфиденциальности (далее – Политика) действует
							в отношении всей информации, которую сайт{' '}
							<span className={styles.underline}>
								<a href='https://astranit.ru' className={styles.link}>
									https://astranit.ru
								</a>
							</span>{' '}
							(далее – Сайт) может получить о Пользователе во время
							использования сайта, программ и продуктов сайта.
						</p>
					</div>
				</div>

				{/* Раздел 1 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>1.1.</span>
								<p className={styles.listText}>
									В настоящей Политике конфиденциальности используются следующие
									термины:
								</p>
							</div>

							<div className={styles.definitions}>
								<div className={styles.definition}>
									<span className={styles.term}>«Администрация сайта»</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										уполномоченные сотрудники на управление сайтом, действующие
										от имени компании АСТРАНИТ, которые организуют и (или)
										осуществляют обработку персональных данных, а также
										определяют цели обработки персональных данных, состав
										персональных данных, подлежащих обработке, действия
										(операции), совершаемые с персональными данными.
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>«Персональные данные»</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										любая информация, относящаяся к прямо или косвенно
										определенному или определяемому физическому лицу (субъекту
										персональных данных).
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>
										«Обработка персональных данных»
									</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										любое действие (операция) или совокупность действий
										(операций), совершаемых с использованием средств
										автоматизации или без использования таких средств с
										персональными данными, включая сбор, запись, систематизацию,
										накопление, хранение, уточнение (обновление, изменение),
										извлечение, использование, передачу (распространение,
										предоставление, доступ), обезличивание, блокирование,
										удаление, уничтожение персональных данных.
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>
										«Конфиденциальность персональных данных»
									</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										обязательное для соблюдения Администрацией сайта требование
										не допускать их распространения без согласия субъекта
										персональных данных или наличия иного законного основания.
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>
										«Пользователь сайта (далее Пользователь)»
									</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										лицо, имеющее доступ к Сайту, посредством сети Интернет и
										использующее Сайт.
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>«Cookies»</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										небольшой фрагмент данных, отправленный веб-сервером и
										хранимый на компьютере пользователя, который веб-клиент или
										веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе
										при попытке открыть страницу соответствующего сайта.
									</span>
								</div>

								<div className={styles.definition}>
									<span className={styles.term}>«IP-адрес»</span>
									<span className={styles.separator}>–</span>
									<span className={styles.description}>
										уникальный сетевой адрес узла в компьютерной сети,
										построенной по протоколу IP.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 2 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>2. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>2.1.</span>
								<p className={styles.listText}>
									Использование Пользователем сайта означает согласие с
									настоящей Политикой конфиденциальности и условиями обработки
									персональных данных Пользователя.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>2.2.</span>
								<p className={styles.listText}>
									В случае несогласия с условиями Политики конфиденциальности
									Пользователь должен прекратить использование сайта.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>2.3.</span>
								<p className={styles.listText}>
									Настоящая Политика конфиденциальности применяется только к
									сайту{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
									. Сайт не контролирует и не несет ответственность за сайты
									третьих лиц, на которые Пользователь может перейти по ссылкам,
									доступным на сайте.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>2.4.</span>
								<p className={styles.listText}>
									Администрация сайта не проверяет достоверность персональных
									данных, предоставляемых Пользователем сайта.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 3 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>3.1.</span>
								<p className={styles.listText}>
									Настоящая Политика конфиденциальности устанавливает
									обязательства Администрации сайта по неразглашению и
									обеспечению режима защиты конфиденциальности персональных
									данных, которые Пользователь предоставляет по запросу
									Администрации сайта при регистрации на сайте или при
									оформлении заказа для приобретения Товара.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>3.2.</span>
								<p className={styles.listText}>
									Персональные данные, разрешённые к обработке в рамках
									настоящей Политики конфиденциальности, предоставляются
									Пользователем путём заполнения регистрационной формы на Сайте
									и включают в себя следующую информацию:
								</p>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>фамилию, имя, отчество Пользователя;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>контактный телефон Пользователя;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>адрес электронной почты (e-mail);</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>адрес доставки Товара;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>место жительство Пользователя.</span>
								</div>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>3.3.</span>
								<p className={styles.listText}>
									Сайт защищает Данные, которые автоматически передаются в
									процессе просмотра рекламных блоков и при посещении страниц,
									на которых установлен статистический скрипт системы
									(«пиксель»):
								</p>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>IP адрес;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>информация из cookies;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										информация о браузере (или иной программе, которая
										осуществляет доступ к показу рекламы);
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>время доступа;</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										адрес страницы, на которой расположен рекламный блок;
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>реферер (адрес предыдущей страницы).</span>
								</div>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>3.4.</span>
								<p className={styles.listText}>
									Отключение cookies может повлечь невозможность доступа к
									частям сайта, требующим авторизации.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 4 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.purposes}>
							<div className={styles.purpose}>
								<div className={styles.purposeNumber}>4.1.</div>
								<div className={styles.purposeText}>
									Персональные данные Пользователя Администрация сайта может
									использовать в целях:
								</div>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Идентификации Пользователя, зарегистрированного на сайте,
										для оформления заказа и (или) заключения Договора
										купли-продажи товара дистанционным способом.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Предоставления Пользователю доступа к персонализированным
										ресурсам Сайта.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Установления с Пользователем обратной связи, включая
										направление уведомлений, запросов, касающихся использования
										Сайта, оказания услуг, обработка запросов и заявок от
										Пользователя.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Определения места нахождения Пользователя для обеспечения
										безопасности, предотвращения мошенничества.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Подтверждения достоверности и полноты персональных данных,
										предоставленных Пользователем.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Создания учетной записи для совершения покупок, если
										Пользователь дал согласие на создание учетной записи.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Уведомления Пользователя Сайта о состоянии Заказа.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Обработки и получения платежей, подтверждения налога или
										налоговых льгот, оспаривания платежа, определения права на
										получение кредитной линии Пользователем.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Предоставления Пользователю эффективной клиентской и
										технической поддержки при возникновении проблем связанных с
										использованием Сайта.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Предоставления Пользователю с его согласия, обновлений
										продукции, специальных предложений, информации о ценах,
										новостной рассылки и иных сведений от имени Сайта или от
										имени партнеров Сайта.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 5 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.1.</span>
								<p className={styles.listText}>
									Обработка персональных данных Пользователя осуществляется без
									ограничения срока, любым законным способом, в том числе в
									информационных системах персональных данных с использованием
									средств автоматизации или без использования таких средств.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.2.</span>
								<p className={styles.listText}>
									Пользователь соглашается с тем, что Администрация сайта вправе
									передавать персональные данные третьим лицам, в частности,
									курьерским службам, организациям почтовой связи, операторам
									электросвязи, исключительно в целях выполнения заказа
									Пользователя, оформленного на Сайте.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.3.</span>
								<p className={styles.listText}>
									Персональные данные Пользователя могут быть переданы
									уполномоченным органам государственной власти Российской
									Федерации только по основаниям и в порядке, установленным
									законодательством Российской Федерации.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.4.</span>
								<p className={styles.listText}>
									При утрате или разглашении персональных данных Администрация
									сайта информирует Пользователя об утрате или разглашении
									персональных данных.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.5.</span>
								<p className={styles.listText}>
									Администрация сайта принимает необходимые организационные и
									технические меры для защиты персональной информации
									Пользователя от неправомерного или случайного доступа,
									уничтожения, изменения, блокирования, копирования,
									распространения, а также от иных неправомерных действий
									третьих лиц.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>5.6.</span>
								<p className={styles.listText}>
									Администрация сайта совместно с Пользователем принимает все
									необходимые меры по предотвращению убытков или иных
									отрицательных последствий, вызванных утратой или разглашением
									персональных данных Пользователя.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 6 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>6. ОБЯЗАТЕЛЬСТВА СТОРОН</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>6.1.</span>
								<p className={styles.listText}>Пользователь обязан:</p>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Предоставить информацию о персональных данных, необходимую
										для пользования Сайтом.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Обновить, дополнить предоставленную информацию о
										персональных данных в случае изменения данной информации.
									</span>
								</div>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>6.2.</span>
								<p className={styles.listText}>Администрация сайта обязана:</p>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Использовать полученную информацию исключительно для целей,
										указанных в п. 4 настоящей Политики конфиденциальности.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Обеспечить хранение конфиденциальной информации в тайне, не
										разглашать без предварительного письменного разрешения
										Пользователя, а также не осуществлять продажу, обмен,
										опубликование, либо разглашение иными возможными способами
										переданных персональных данных Пользователя, за исключением
										п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Принимать меры предосторожности для защиты
										конфиденциальности персональных данных Пользователя согласно
										порядку, обычно используемому для защиты такого рода
										информации в существующем деловом обороте.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Осуществить блокирование персональных данных, относящихся к
										соответствующему Пользователю, с момента обращения или
										запроса Пользователя, или его законного представителя либо
										уполномоченного органа по защите прав субъектов персональных
										данных на период проверки, в случае выявления недостоверных
										персональных данных или неправомерных действий.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 7 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>7. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>7.1.</span>
								<p className={styles.listText}>
									Администрация сайта, не исполнившая свои обязательства, несёт
									ответственность за убытки, понесённые Пользователем в связи с
									неправомерным использованием персональных данных, в
									соответствии с законодательством Российской Федерации, за
									исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2.
									настоящей Политики Конфиденциальности.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>7.2.</span>
								<p className={styles.listText}>
									В случае утраты или разглашения Конфиденциальной информации
									Администрация сайта не несёт ответственность, если данная
									конфиденциальная информация:
								</p>
							</div>

							<div className={styles.dataList}>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Стала публичным достоянием до её утраты или разглашения.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>
										Была получена от третьей стороны до момента её получения
										Администрацией сайта.
									</span>
								</div>
								<div className={styles.dataItem}>
									<span className={styles.bullet}>•</span>
									<span>Была разглашена с согласия Пользователя.</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 8 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>8. РАЗРЕШЕНИЕ СПОРОВ</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>8.1.</span>
								<p className={styles.listText}>
									До обращения в суд с иском по спорам, возникающим из отношений
									между Пользователем сайта и Администрацией сайта, обязательным
									является предъявление претензии (письменного предложения о
									добровольном урегулировании спора).
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>8.2.</span>
								<p className={styles.listText}>
									Получатель претензии в течение 30 календарных дней со дня
									получения претензии, письменно уведомляет заявителя претензии
									о результатах рассмотрения претензии.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>8.3.</span>
								<p className={styles.listText}>
									При не достижении соглашения спор будет передан на
									рассмотрение в судебный орган в соответствии с действующим
									законодательством Российской Федерации.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>8.4.</span>
								<p className={styles.listText}>
									К настоящей Политике конфиденциальности и отношениям между
									Пользователем и Администрацией сайта применяется действующее
									законодательство Российской Федерации.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 9 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>
					<div className={styles.sectionContent}>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>9.1.</span>
								<p className={styles.listText}>
									Администрация сайта вправе вносить изменения в настоящую
									Политику конфиденциальности без согласия Пользователя.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>9.2.</span>
								<p className={styles.listText}>
									Новая Политика конфиденциальности вступает в силу с момента ее
									размещения на Сайте, если иное не предусмотрено новой
									редакцией Политики конфиденциальности.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>9.3.</span>
								<p className={styles.listText}>
									Все предложения или вопросы по настоящей Политике
									конфиденциальности следует сообщать по адресу{' '}
									<span className={styles.underline}>
										<a href='mailto:client@astranit.ru' className={styles.link}>
											client@astranit.ru
										</a>
									</span>
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>9.4.</span>
								<p className={styles.listText}>
									Действующая Политика конфиденциальности размещена на странице
									по адресу{' '}
									<span className={styles.underline}>
										<a
											href='https://astranit.ru/privacy'
											className={styles.link}
										>
											https://astranit.ru/privacy
										</a>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Контакты */}
				<div className={styles.footer}>
					<div className={styles.contacts}>
						<h3 className={styles.contactsTitle}>Контактная информация</h3>
						<div className={styles.contactsGrid}>
							<div className={styles.contactItem}>
								<strong>Электронная почта:</strong>
								<span>
									<a href='mailto:client@astranit.ru' className={styles.link}>
										client@astranit.ru
									</a>
								</span>
							</div>
							<div className={styles.contactItem}>
								<strong>Сайт:</strong>
								<span>
									<a href='https://astranit.ru' className={styles.link}>
										https://astranit.ru
									</a>
								</span>
							</div>
							<div className={styles.contactItem}>
								<strong>Страница политики:</strong>
								<span>
									<a href='https://astranit.ru/privacy' className={styles.link}>
										https://astranit.ru/privacy
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
