import a from './Navigation.module.css';

const Navigation = () => {
	return (
		<section className = {a.nav}>
			<div className = "header__menu menu">
				<nav className = {a.menu__body}>
					<ul className = {a.menu__list}>
						<li className = "menu__item"><a href="/Profile" className = {a.menu__link}>Профиль</a></li>
						<li className = "menu__item"><a href="/Mesage" className = {a.menu__link}>Мессенджер</a></li>
						<li className = "menu__item"><a href="/News" className = {a.menu__link}>Новости</a></li>
						<li className = "menu__item"><a href="/Music" className = {a.menu__link}>Музыка</a></li>
						<li className = "menu__item"><a href="/Settings" className = {a.menu__link}>Настройки</a></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default Navigation;