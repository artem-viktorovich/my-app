import { NavLink } from 'react-router-dom';
import a from './Navigation.module.css';

const Navigation = () => {
	return (
		<section className = {a.nav}>
			<div className = "header__menu menu">
				<nav className = {a.menu__body}>
					<ul className = {a.menu__list}>
						<li className = "menu__item"><NavLink to="/Profile" className = {a.menu__link} activeClassName={a.active}>Профиль</NavLink></li>
						<li className = "menu__item"><NavLink to="/Mesage" className = {a.menu__link} activeClassName={a.active}>Мессенджер</NavLink></li>
						<li className = "menu__item"><NavLink to="/News" className = {a.menu__link} activeClassName={a.active}>Новости</NavLink></li>
						<li className = "menu__item"><NavLink to="/Music" className = {a.menu__link} activeClassName={a.active}>Музыка</NavLink></li>
						<li className = "menu__item"><NavLink to="/Settings" className = {a.menu__link} activeClassName={a.active}>Настройки</NavLink></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default Navigation;