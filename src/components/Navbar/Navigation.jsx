import a from './Navigation.module.css';

// let linker = {
// 	'nav': 'nav',
// 	'link': 'menu__link'
// }
const Navigation = () => {
	return (
		<section className = {a.nav}>
			<div className = "header__menu menu">
				<nav className = {a.menu__body}>
					<ul className = {a.menu__list}>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Профиль</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Мессенджер</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Новости</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Музыка</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Настройки</a></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default Navigation;