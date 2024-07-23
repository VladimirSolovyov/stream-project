import React from 'react'
import StreamForm from '../components/StreamForm'
import styles from './CreateStreamPage.module.css'

const CreateStreamPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1>Добавление Stream</h1>
			<StreamForm />
		</div>
	)
}

export default CreateStreamPage
