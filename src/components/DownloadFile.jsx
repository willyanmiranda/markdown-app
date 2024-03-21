import React from 'react'
import './DownloadFile.css'
import iconDoc from '../assets/icon-document.svg'

export default function DownloadFile(props) {
	const { docs, currentDoc } = props

	const doc = Object.getOwnPropertyDescriptors(docs.filter((doc) => doc.id === currentDoc)[0])
	const docContent = doc.content.value
	const docName = doc.name.value

	// id any file extension, remove it from docName
	const extensionRemoved = docName.split('.').pop()
	// add .md to docName
	const docNameWithExtension = `${extensionRemoved}.md`

	const [hide, setHide] = React.useState(false)

	const handleClick = () => {
		setHide(true)
	}

	const downloadTxtFile = () => {
		const element = document.createElement('a')
		const file = new Blob([docContent], {
			type: 'text/markdown',
		})
		element.href = URL.createObjectURL(file)
		element.download = docNameWithExtension
		document.body.appendChild(element)
		element.click()
	}

	return (
		<>
			<div className={`modal-download ${hide ? 'hide' : 'show'}`} data-theme={document.querySelector('.App').getAttribute('data-theme')}>
				<div className='download-wrapper'>
					<div className='download-body'>
						<button type='button' className='download-close-button' onClick={handleClick}>
							<span>&times;</span>
						</button>
						Suas alterações foram salvas. Você pode baixar o arquivo clicando no link abaixo.
					</div>
					<button className='button' id='downloadDoc' onClick={downloadTxtFile}>
						<span className='document'>
							<img src={iconDoc} alt='show preview' />
						</span>
						Download
					</button>
				</div>
			</div>
		</>
	)
}
