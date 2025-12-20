import './BlockNetwork.scss'
export default function BlockNetwork({ data }) {
	return (
		<div className='block-network'>
			<div className='block-network__grid'>
				<div className='block-network__grid-box block-network__grid-box_1'>
					<h3 className='network__grid-box_1-title'>{data.box1.title}</h3>
					<div className='network__grid-box_1-div1'>
						<h4 className='network__grid-box_1-subtitle'>
							{data.box1.block1.title}
						</h4>
						<p className='network__grid-box_1-desc'>{data.box1.block1.desc}</p>
					</div>
					<div className='network__grid-box_2-div2'>
						<h4 className='network__grid-box_2-subtitle'>
							{data.box1.block2.title}
						</h4>
						<p className='network__grid-box_2-desc'>{data.box1.block2.desc}</p>
					</div>
					<div className='network__grid-box_3-div3'>
						<h4 className='network__grid-box_3-subtitle'>
							{data.box1.block3.title}
						</h4>
						<p className='network__grid-box_3-desc'>{data.box1.block3.desc}</p>
					</div>
					<div className='network__grid-box_4-div4'>
						<h4 className='network__grid-box_4-subtitle'>
							{data.box1.block4.title}
						</h4>
						<p className='network__grid-box_4-desc'>{data.box1.block4.desc}</p>
					</div>
				</div>
				<div className='block-network__grid-box block-network__grid-box_2'>
					<h3 className='network__grid-box_2-title'>{data.box2.title}</h3>
					<div className='network__grid-box_2-div1'>
						<h4 className='network__grid-box_2-subtitle'>
							{data.box2.block1.title}
						</h4>
						<ul className='network__grid-box_list1'>
							{data.box2.block1.list.map(item => (
								<li key={item} className='network__grid-box_list1-item'>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className='network__grid-box_2-div2'>
						<h4 className='network__grid-box_2-subtitle'>
							{data.box2.block2.title}
						</h4>
						<ul className='network__grid-box_2_list2'>
							{data.box2.block2.list.map(item => (
								<li key={item} className='network__grid-box_list2-item'>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className='network__grid-box_2-div3'>
						<h4 className='network__grid-box_2-subtitle'>
							{data.box2.block3.title}
						</h4>
						<p className='network__grid-box_2-desc'> {data.box2.block3.desc}</p>
					</div>
				</div>
				<div className='block-network__grid-box block-network__grid-box_3'>
					<h3 className='network__grid-box_3-title'>{data.box3.title}</h3>
					<p>{data.box3.desc1}</p>
					<ul>
						{data.box3.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<p>{data.box3.desc2}</p>
				</div>
				<div className='block-network__grid-box block-network__grid-box_4'>
					<h3 className='network__grid-box_4-title'>{data.box4.title}</h3>
					<div className='network__grid-box_4-div1'>
						<h4 className='network__grid-box_4-subtitle'>
							{data.box4.block1.title}
						</h4>
						<p className='network__grid-box_4-desc'>{data.box4.block1.desc}</p>
					</div>
					<div className='network__grid-box_4-div2'>
						<h4 className='network__grid-box_4-subtitle'>
							{data.box4.block2.title}
						</h4>
						<p className='network__grid-box_4-desc'>{data.box4.block2.desc}</p>
					</div>
					<div className='network__grid-box_4-div3'>
						<h4 className='network__grid-box_4-subtitle'>
							{data.box4.block3.title}
						</h4>
						<p className='network__grid-box_4-desc'>{data.box4.block3.desc}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
