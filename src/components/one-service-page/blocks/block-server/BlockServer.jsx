import './BlockServer.scss'

export default function BlockServer({ data }) {
	return (
		<div className='block-server'>
			<div className='block-server__grid'>
				<div className='block-server__grid-box block-server__grid-box_1'>
					<h3 className='server__grid-box_1-title'>{data.box1.title}</h3>

					<div className='server__grid-box_1-div1'>
						<h4 className='server__grid-box_1-subtitle1'>
							{data.box1.block1.title}
						</h4>
						<p className='server__grid-box_1-desc1'>{data.box1.block1.desc}</p>
					</div>
					<div className='server__grid-box_1-div2'>
						<h4 className='server__grid-box_1-subtitle2'>
							{data.box1.block2.title}
						</h4>
						<p className='server__grid-box_1-desc1'>{data.box1.block2.desc}</p>
					</div>
					<div className='server__grid-box_1-div3'>
						<h4 className='server__grid-box_1-subtitle2'>
							{data.box1.block3.title}
						</h4>
						<p className='server__grid-box_1-desc1'>{data.box1.block3.desc}</p>
					</div>
				</div>
				<div className='block-server__grid-box block-server__grid-box_2'>
					<h3 className='server__grid-box_2-title'>{data.box2.title}</h3>
					<div className='server__grid-box_2-div1'>
						<h4 className='server__grid-box_2-subtitle'>
							{data.box2.block1.title}
						</h4>
						<ul className='server__grid-box_2-list1'>
							{data.box2.block1.list.map(item => (
								<li key={item} className='server__grid-box_2-list1-item'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='block-server__grid-box block-server__grid-box_3'>
					<h3 className='server__grid-box_3-title'>{data.box3.title}</h3>
					<p className='server__grid-box_3-desc1'>{data.box3.desc1}</p>
					<ul className='server__grid-box_3-list'>
						{data.box3.list.map(item => (
							<li className='server__grid-box_3-list-item'>{item}</li>
						))}
					</ul>
					<p className='server__grid-box_3-desc2'>{data.box3.desc2}</p>
				</div>
				<div className='block-server__grid-box block-server__grid-box_4'>
					<h3 className='server__grid-box_4-title'>{data.box4.title}</h3>
					<p className='server__grid-box_4-desc1'>{data.box4.desc1}</p>
					<div className='server__grid-box_4-div1'>
						<h4 className='server__grid-box_4-subtitle1'>
							{data.box4.block1.title}
						</h4>
						<p className='server__grid-box_4-subtitle1'>
							{data.box4.block1.desc}
						</p>
					</div>
					<div className='server__grid-box_4-div2'>
						<h4 className='server__grid-box_4-subtitle2'>
							{data.box4.block2.title}
						</h4>
						<p className='server__grid-box_4-desc1'>{data.box4.block2.desc}</p>
					</div>
					<div className='server__grid-box_4-div3'>
						<h4 className='server__grid-box_4-subtitle3'>
							{data.box4.block3.title}
						</h4>
						<p className='server__grid-box_4-subtitle4'>
							{data.box4.block3.desc}
						</p>
					</div>
					<p className='server__grid-box_4-desc2'>{data.box4.desc2}</p>
				</div>
			</div>
		</div>
	)
}
