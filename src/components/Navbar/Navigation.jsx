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
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Profile</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Messages</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>News</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Music</a></li>
						<li className = "menu__item"><a href="#" className = {a.menu__link}>Settings</a></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default Navigation;