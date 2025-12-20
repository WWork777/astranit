import './Block1C.scss'
export default function Block1C({ data }) {
	return (
		<div className='block-1c'>
			<div className='block-1c__grid'>
				<div className='block-1c__grid-box block-1c__grid-box_1'>
					<h3 className='c__grid-box_1-title'>{data.box1.title}</h3>
					<p className='c__grid-box_1-desc1'>{data.box1.desc}</p>
					<ul className='c__grid-box_1-list1'>
						<h4 className='c__grid-box_1-subtitle1'>
							{data.box1.block1.title}
						</h4>
						{data.box1.block1.list.map(item => (
							<li key={item} className='c__grid-box_1-list1-item'>
								{item}
							</li>
						))}
					</ul>
					<div className='c__grid-box_1-div'>
						<h4 className='c__grid-box_1-subtitle2'>
							{data.box1.block2.title}
						</h4>
						<p className='c__grid-box_1-desc2'>{data.box1.block2.desc}</p>
					</div>
					<ul className='c__grid-box_1-list2'>
						<h4 className='c__grid-box_1-subtitle2'>
							{data.box1.block3.title}
						</h4>
						{data.box1.block3.list.map(item => (
							<li className='c__grid-box_1-list2-item' key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='block-1c__grid-box block-1c__grid-box_2'>
					<h3 className='c__grid-box_2-title'>{data.box2.title}</h3>
					<ul className='c__grid-box_2-list1'>
						{data.box2.list.map(item => (
							<li className='c__grid-box_2-list1-item' key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='block-1c__grid-box block-1c__grid-box_3'>
					<h3 className='c__grid-box_3-title'>{data.box3.title}</h3>
					<p className='c__grid-box_3-desc1'>{data.box3.desc}</p>
					<ul className='c__grid-box_3-list1'>
						{data.box3.list.map(item => (
							<li className='c__grid-box_3-list1-item' key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='block-1c__grid-box block-1c__grid-box_4'>
					<h3 className='c__grid-box_4-title'>{data.box4.title}</h3>
					<p className='c__grid-box_4-desc1'>{data.box4.desc1}</p>
					<p className='c__grid-box_4-desc2'>{data.box4.desc2}</p>
					<ul className='c__grid-box_4-list1'>
						<h4 className='c__grid-box_4-subtitle1'>
							{data.box4.block1.title}
						</h4>
						{data.box4.block1.list.map(item => (
							<li key={item} className='c__grid-box_4-list1-item'>
								{item}
							</li>
						))}
					</ul>
					<ul className='c__grid-box_4-list2'>
						<h4 className='c__grid-box_4-subtitle2'>
							{data.box4.block2.title}
						</h4>
						{data.box4.block2.list.map(item => (
							<li key={item} className='c__grid-box_4-list2-item'>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
