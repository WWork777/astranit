import styles from './styles.module.scss'

export default function PersonalData() {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Политика обработки персональных данных</h1>
				<div className={styles.dateInfo}>Версия от 01 января 2026 года</div>
			</div>

			<div className={styles.contentWrapper}>
				{/* Раздел 1 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>1. Общие положения</h2>
					<div className={styles.sectionContent}>
						<p className={styles.paragraph}>
							Настоящая политика обработки персональных данных составлена в
							соответствии с требованиями Федерального закона от 27.07.2006.
							№152-ФЗ «О персональных данных» и определяет порядок обработки
							персональных данных и меры по обеспечению безопасности
							персональных данных ООО " ИТ СПЕКТР" (далее – Оператор).
						</p>

						<div className={styles.list}>
							<div className={styles.listItem}>
								<span className={styles.listNumber}>1.1.</span>
								<p className={styles.listText}>
									Оператор ставит своей важнейшей целью и условием осуществления
									своей деятельности соблюдение прав и свобод человека и
									гражданина при обработке его персональных данных, в том числе
									защиты прав на неприкосновенность частной жизни, личную и
									семейную тайну.
								</p>
							</div>

							<div className={styles.listItem}>
								<span className={styles.listNumber}>1.2.</span>
								<p className={styles.listText}>
									Настоящая политика Оператора в отношении обработки
									персональных данных (далее – Политика) применяется ко всей
									информации, которую Оператор может получить о посетителях
									веб-сайта{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 2 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						2. Основные понятия, используемые в Политике
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.definitions}>
							<div className={styles.definition}>
								<span className={styles.term}>
									Автоматизированная обработка персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									обработка персональных данных с помощью средств вычислительной
									техники;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Блокирование персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									временное прекращение обработки персональных данных (за
									исключением случаев, если обработка необходима для уточнения
									персональных данных);
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>Веб-сайт</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									совокупность графических и информационных материалов, а также
									программ для ЭВМ и баз данных, обеспечивающих их доступность в
									сети интернет по сетевому адресу{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Информационная система персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									совокупность содержащихся в базах данных персональных данных,
									и обеспечивающих их обработку информационных технологий и
									технических средств;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Обезличивание персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									действия, в результате которых невозможно определить без
									использования дополнительной информации принадлежность
									персональных данных конкретному Пользователю или иному
									субъекту персональных данных;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Обработка персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									любое действие (операция) или совокупность действий
									(операций), совершаемых с использованием средств автоматизации
									или без использования таких средств с персональными данными,
									включая сбор, запись, систематизацию, накопление, хранение,
									уточнение (обновление, изменение), извлечение, использование,
									передачу (распространение, предоставление, доступ),
									обезличивание, блокирование, удаление, уничтожение
									персональных данных;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>Оператор</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									государственный орган, муниципальный орган, юридическое или
									физическое лицо, самостоятельно или совместно с другими лицами
									организующие и (или) осуществляющие обработку персональных
									данных, а также определяющие цели обработки персональных
									данных, состав персональных данных, подлежащих обработке,
									действия (операции), совершаемые с персональными данными;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>Персональные данные</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									любая информация, относящаяся прямо или косвенно к
									определенному или определяемому Пользователю веб-сайта{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>Пользователь</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									любой посетитель веб-сайта{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Предоставление персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									действия, направленные на раскрытие персональных данных
									определенному лицу или определенному кругу лиц;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Распространение персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									любые действия, направленные на раскрытие персональных данных
									неопределенному кругу лиц (передача персональных данных) или
									на ознакомление с персональными данными неограниченного круга
									лиц, в том числе обнародование персональных данных в средствах
									массовой информации, размещение в
									информационно-телекоммуникационных сетях или предоставление
									доступа к персональным данным каким-либо иным способом;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Трансграничная передача персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									передача персональных данных на территорию иностранного
									государства органу власти иностранного государства,
									иностранному физическому или иностранному юридическому лицу;
								</span>
							</div>

							<div className={styles.definition}>
								<span className={styles.term}>
									Уничтожение персональных данных
								</span>
								<span className={styles.separator}>–</span>
								<span className={styles.description}>
									любые действия, в результате которых персональные данные
									уничтожаются безвозвратно с невозможностью дальнейшего
									восстановления содержания персональных данных в информационной
									системе персональных данных и (или) результате которых
									уничтожаются материальные носители персональных данных.
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 3 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						3. Оператор может обрабатывать следующие персональные данные
						Пользователя
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.dataList}>
							<div className={styles.dataItem}>
								<span className={styles.bullet}>•</span>
								<span>Фамилия, имя, отчество;</span>
							</div>
							<div className={styles.dataItem}>
								<span className={styles.bullet}>•</span>
								<span>Номера телефонов;</span>
							</div>
							<div className={styles.dataItem}>
								<span className={styles.bullet}>•</span>
								<span>
									Также на сайте происходит сбор и обработка обезличенных данных
									о посетителях (в т.ч. файлов «cookie») с помощью сервисов
									интернет-статистики (Яндекс Метрика и Гугл Аналитика и
									других).
								</span>
							</div>
						</div>
						<p className={styles.note}>
							Вышеперечисленные данные далее по тексту Политики объединены общим
							понятием Персональные данные.
						</p>
					</div>
				</div>

				{/* Раздел 4 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						4. Цели обработки персональных данных
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.purposes}>
							<div className={styles.purpose}>
								<div className={styles.purposeNumber}>4.1.</div>
								<div className={styles.purposeText}>
									Цель обработки персональных данных Пользователя —
									информирование Пользователя посредством обратного звонка.
								</div>
							</div>

							<div className={styles.purpose}>
								<div className={styles.purposeNumber}>4.2.</div>
								<div className={styles.purposeText}>
									Также Оператор имеет право направлять Пользователю уведомления
									о новых продуктах и услугах, специальных предложениях и
									различных событиях. Пользователь всегда может отказаться от
									получения информационных сообщений, направив Оператору письмо
									на адрес электронной почты{' '}
									<span className={styles.underline}>
										<a href='mailto:client@astranit.ru' className={styles.link}>
											client@astranit.ru
										</a>
									</span>{' '}
									с пометкой «Отказ от уведомлениях о новых продуктах и услугах
									и специальных предложениях».
								</div>
							</div>

							<div className={styles.purpose}>
								<div className={styles.purposeNumber}>4.3.</div>
								<div className={styles.purposeText}>
									Обезличенные данные Пользователей, собираемые с помощью
									сервисов интернет-статистики, служат для сбора информации о
									действиях Пользователей на сайте, улучшения качества сайта и
									его содержания.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 5 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						5. Правовые основания обработки персональных данных
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.legalBases}>
							<div className={styles.legalItem}>
								<div className={styles.legalNumber}>5.1.</div>
								<div className={styles.legalText}>
									Оператор обрабатывает персональные данные Пользователя только
									в случае их заполнения и/или отправки Пользователем
									самостоятельно через специальные формы, расположенные на сайте{' '}
									<span className={styles.underline}>
										<a href='https://astranit.ru' className={styles.link}>
											https://astranit.ru
										</a>
									</span>
									. Заполняя соответствующие формы и/или отправляя свои
									персональные данные Оператору, Пользователь выражает свое
									согласие с данной Политикой.
								</div>
							</div>

							<div className={styles.legalItem}>
								<div className={styles.legalNumber}>5.2.</div>
								<div className={styles.legalText}>
									Оператор обрабатывает обезличенные данные о Пользователе в
									случае, если это разрешено в настройках браузера Пользователя
									(включено сохранение файлов «cookie» и использование
									технологии JavaScript).
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 6 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						6. Порядок сбора, хранения, передачи и других видов обработки
						персональных данных
					</h2>
					<div className={styles.sectionContent}>
						<p className={styles.paragraph}>
							Безопасность персональных данных, которые обрабатываются
							Оператором, обеспечивается путем реализации правовых,
							организационных и технических мер, необходимых для выполнения в
							полном объеме требований действующего законодательства в области
							защиты персональных данных.
						</p>

						<div className={styles.procedures}>
							<div className={styles.procedure}>
								<div className={styles.procedureNumber}>6.1.</div>
								<div className={styles.procedureText}>
									Оператор обеспечивает сохранность персональных данных и
									принимает все возможные меры, исключающие доступ к
									персональным данным неуполномоченных лиц.
								</div>
							</div>

							<div className={styles.procedure}>
								<div className={styles.procedureNumber}>6.2.</div>
								<div className={styles.procedureText}>
									Персональные данные Пользователя никогда, ни при каких
									условиях не будут переданы третьим лицам, за исключением
									случаев, связанных с исполнением действующего
									законодательства.
								</div>
							</div>

							<div className={styles.procedure}>
								<div className={styles.procedureNumber}>6.3.</div>
								<div className={styles.procedureText}>
									В случае выявления неточностей в персональных данных,
									Пользователь может актуализировать их самостоятельно, путем
									направления Оператору уведомление на адрес электронной почты
									Оператора{' '}
									<span className={styles.underline}>
										<a href='mailto:client@astranit.ru' className={styles.link}>
											client@astranit.ru
										</a>
									</span>{' '}
									с пометкой «Актуализация персональных данных».
								</div>
							</div>

							<div className={styles.procedure}>
								<div className={styles.procedureNumber}>6.4.</div>
								<div className={styles.procedureText}>
									Срок обработки персональных данных является неограниченным.
									Пользователь может в любой момент отозвать свое согласие на
									обработку персональных данных, направив Оператору уведомление
									посредством электронной почты на электронный адрес Оператора{' '}
									<span className={styles.underline}>
										<a href='mailto:client@astranit.ru' className={styles.link}>
											client@astranit.ru
										</a>
									</span>{' '}
									с пометкой «Отзыв согласия на обработку персональных данных».
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 7 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						7. Трансграничная передача персональных данных
					</h2>
					<div className={styles.sectionContent}>
						<div className={styles.transfer}>
							<div className={styles.transferItem}>
								<div className={styles.transferNumber}>7.1.</div>
								<div className={styles.transferText}>
									Оператор до начала осуществления трансграничной передачи
									персональных данных обязан убедиться в том, что иностранным
									государством, на территорию которого предполагается
									осуществлять передачу персональных данных, обеспечивается
									надежная защита прав субъектов персональных данных.
								</div>
							</div>

							<div className={styles.transferItem}>
								<div className={styles.transferNumber}>7.2.</div>
								<div className={styles.transferText}>
									Трансграничная передача персональных данных на территории
									иностранных государств, не отвечающих вышеуказанным
									требованиям, может осуществляться только в случае наличия
									согласия в письменной форме субъекта персональных данных на
									трансграничную передачу его персональных данных и/или
									исполнения договора, стороной которого является субъект
									персональных данных.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Раздел 8 */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>8. Заключительные положения</h2>
					<div className={styles.sectionContent}>
						<div className={styles.conclusions}>
							<div className={styles.conclusion}>
								<div className={styles.conclusionNumber}>8.1.</div>
								<div className={styles.conclusionText}>
									Пользователь может получить любые разъяснения по интересующим
									вопросам, касающимся обработки его персональных данных,
									обратившись к Оператору с помощью электронной почты{' '}
									<span className={styles.underline}>
										<a href='mailto:client@astranit.ru' className={styles.link}>
											client@astranit.ru
										</a>
									</span>
									.
								</div>
							</div>

							<div className={styles.conclusion}>
								<div className={styles.conclusionNumber}>8.2.</div>
								<div className={styles.conclusionText}>
									В данном документе будут отражены любые изменения политики
									обработки персональных данных Оператором. Политика действует
									бессрочно до замены ее новой версией.
								</div>
							</div>

							<div className={styles.conclusion}>
								<div className={styles.conclusionNumber}>8.3.</div>
								<div className={styles.conclusionText}>
									Актуальная версия Политики в свободном доступе расположена в
									сети Интернет по адресу{' '}
									<span className={styles.underline}>
										<a
											href='https://astranit.ru/personal'
											className={styles.link}
										>
											https://astranit.ru/personal
										</a>
									</span>
									.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Подпись */}
				<div className={styles.footer}>
					<div className={styles.signature}>
						<div className={styles.signatureLine}></div>
						<div className={styles.signatureInfo}>
							<div>Генеральный директор</div>
							<div>ООО "СПЕКТР"</div>
							<div className={styles.signatureName}>Романов А.Г.</div>
						</div>
					</div>

					<div className={styles.contacts}>
						<h3 className={styles.contactsTitle}>
							Контактная информация Оператора
						</h3>
						<div className={styles.contactsGrid}>
							<div className={styles.contactItem}>
								<strong>Юридический адрес:</strong>
								<span>
									123456, г. Санкт-Петербург, пр. Юрия Гагарина, д.23, офис 303
								</span>
							</div>
							<div className={styles.contactItem}>
								<strong>Почтовый адрес:</strong>
								<span>
									123456, г. Санкт-Петербург, пр. Юрия Гагарина, д.23, офис 303
								</span>
							</div>
							<div className={styles.contactItem}>
								<strong>Электронная почта:</strong>
								<span>
									<a href='mailto:client@astranit.ru' className={styles.link}>
										client@astranit.ru
									</a>
								</span>
							</div>
							<div className={styles.contactItem}>
								<strong>Телефон:</strong>
								<span>+7(812) 336 36 46</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
