import React from 'react'
import "./header.css"
import iconDoc from '../../assets/icon-document.svg'
import iconDelete from '../../assets/icon-delete.svg'


const Header = () => {
    return (
        <header className='wm-header' role='header'>
			<div className='wm-burger-wrapper'>
				<div className='wm-burger'>
					<div className='wm-dash'></div>
				</div>
			</div>
			<h1 className='wm-logo wm-logo-desktop'>MARKDOWN</h1>
			<span className='wm-document-infos'>
				<span className='wm-document-logo'>
					<img src={iconDoc} alt='show preview' />
				</span>
				<span className='wm-document-name'>
					<label htmlFor='docName'>Document Name</label>
					<input type='text' placeholder='Document Name' className='wm-form--input' name='docName' />
				</span>
			</span>

			<button className='wm-modal-toggle'>
				<img src={iconDelete} alt='delete document' />
			</button>

			<button className='wm-button wm-save-doc'>
				<span className='wm-button-text'>Salvar alterações</span>
			</button>
		</header>
    )
}

export default Header;