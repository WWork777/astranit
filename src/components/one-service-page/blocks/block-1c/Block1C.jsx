import s from '../styles.module.scss'
export default function Block1C({ data }) {
	return (
		<div className={s.block}>
			<div className={s.block_grid}>
				<div className={s.block_grid__box1}>
					<h3>{data.box1.title}</h3>
					<p>{data.box1.desc}</p>
					<ul>
						<h4>{data.box1.block1.title}</h4>
						{data.box1.block1.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<div>
						<h4>{data.box1.block2.title}</h4>
						<p>{data.box1.block2.desc}</p>
					</div>
					<ul>
						<h4>{data.box1.block3.title}</h4>
						{data.box1.block3.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className={s.block_grid__box2}>
					<h3>{data.box2.title}</h3>
					<ul>
						{data.box2.list.map(item => (
							<li style={{ marginBottom: '25px' }} key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className={s.block_grid__box3}>
					<h3>{data.box3.title}</h3>
					<p>{data.box3.desc}</p>
					<ul>
						{data.box3.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className={s.block_grid__box4}>
					<h3>{data.box4.title}</h3>
					<p>{data.box4.desc1}</p>
					<p>{data.box4.desc2}</p>
					<ul>
						<h4>{data.box4.block1.title}</h4>
						{data.box4.block1.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<ul>
						<h4>{data.box4.block2.title}</h4>
						{data.box4.block2.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
