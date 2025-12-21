import s from '../styles.module.scss'
export default function BlockServer({ data }) {
	return (
		<div className={s.block}>
			<div className={s.block_grid}>
				<div className={s.block_grid__box1}>
					<h3>{data.box1.title}</h3>

					<div>
						<h4>{data.box1.block1.title}</h4>
						<p>{data.box1.block1.desc}</p>
					</div>
					<div>
						<h4>{data.box1.block2.title}</h4>
						<p>{data.box1.block2.desc}</p>
					</div>
					<div>
						<h4>{data.box1.block3.title}</h4>
						<p>{data.box1.block3.desc}</p>
					</div>
					<div>
						<h4>{data.box1.block4.title}</h4>
						<p>{data.box1.block4.desc}</p>
					</div>
				</div>
				<div className={s.block_grid__box2}>
					<h3>{data.box2.title}</h3>
					<div>
						<h4>{data.box2.block1.title}</h4>
						<ul>
							{data.box2.block1.list.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
				<div className={s.block_grid__box3}>
					<h3 className='server__grid-box_3-title'>{data.box3.title}</h3>
					<p className='server__grid-box_3-desc1'>{data.box3.desc1}</p>
					<ul className='server__grid-box_3-list'>
						{data.box3.list.map(item => (
							<li key={item} className='server__grid-box_3-list-item'>
								{item}
							</li>
						))}
					</ul>
					<p className='server__grid-box_3-desc2'>{data.box3.desc2}</p>
				</div>
				<div className={s.block_grid__box4}>
					<h3>{data.box4.title}</h3>
					<p>{data.box4.desc1}</p>
					<div>
						<h4>{data.box4.block1.title}</h4>
						<p>{data.box4.block1.desc}</p>
					</div>
					<div>
						<h4>{data.box4.block2.title}</h4>
						<p>{data.box4.block2.desc}</p>
					</div>
					<div>
						<h4>{data.box4.block3.title}</h4>
						<p>{data.box4.block3.desc}</p>
					</div>
					<p>{data.box4.desc2}</p>
				</div>
			</div>
		</div>
	)
}
