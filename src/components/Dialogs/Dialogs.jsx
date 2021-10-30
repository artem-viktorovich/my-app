import D_s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		  <section className={D_s.Dialogs}>
			  <h1>Сообщения</h1>
			  <div className={D_s.Dialogs_body}>
				<div className={D_s.Dialogs__list}>
						<div className={D_s.Dialog}>
							Maks
						</div>
						<div className={D_s.Dialog}>
							Anton
						</div>
						<div className={D_s.Dialog}>
							Dima
						</div>
						<div className={D_s.Dialog}>
							Artem
						</div>
				</div>
				<div className={D_s.Dialogs__message}>
					<div className={D_s.message}>
						<p>Привет</p>
					</div>
					<div className={D_s.message}>
						<p>Новый урок</p>
					</div>
					<div className={D_s.message}>
						<p>Хай пипл</p>
					</div>
				</div>
			  </div>
		  </section>
	);
  }
  
  export default Dialogs;
  
  
  