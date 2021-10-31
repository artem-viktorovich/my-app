import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<section>
			<div className={p.net}>
				<img src="https://avatars.mds.yandex.net/i?id=2a0000017a03e78461368fd99be737a2bf6e-4034422-images-thumbs&n=13" alt="" />
			</div>
			<div className={p.info__content_name}>
				<div className={p.info__img}>
					<img src="https://ya62.ru/upload/resize_cache/iblock/fb5/660_465_2/fb5a76206b1d30ecb41f952ecde0c54a.jpg" alt="avatar" />
				</div>
				<div className={p.content__net}>
					<p className={p.content__name}>Vasechko A.</p>
					<ul className='content__list'>
						<li>Date of Birth: 2 january</li>
						<li>City: Minsk</li>
						<li>Education: BSU `11</li>
						<li>Web Site: https://vasechko.pp.ua</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ProfileInfo;

