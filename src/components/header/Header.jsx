import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <header className='wm-header'>
            <div className="wm-header-left">
                <div className="wm-burger-wrapper">
                    <div className="wm-burger">
                        <div className="wm-dash"></div>
                    </div>
                </div>
                <div className="wm-header-logo">
                    <span>Markdown</span>
                </div>
                <div className="wm-header-file-container">
                    <img src="" alt="" />
                    <div className="wm-header-file-info">
                        <label htmlFor='wm-file-name' className='wm-header-file-label'>Nome do Documento</label>
                        <input type="text" name="wm-file-name" id="wm-file-name" />
                    </div>
                </div>
            </div>

            <div className="wm-header-right">
                <div className="wm-header-close-file">
                    <img src="" alt="" />
                </div>
                <div className="wm-header-save-btn">
                    <img src="" alt="" />
                    <span>Salvar alterações</span>
                </div>
            </div>

        </header>
    )
}

export default Header;