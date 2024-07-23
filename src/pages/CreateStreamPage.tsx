import React from 'react'
import StreamForm from '../components/StreamForm'

const CreateStreamPage: React.FC = () => {
	return (
		<div className='createStream'>
			<h1>Добавление Stream</h1>
			<StreamForm />
		</div>
	)
}

export default CreateStreamPage
