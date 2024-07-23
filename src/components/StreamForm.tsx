import React, { useState } from 'react'
import { saveStream } from '../api/streams'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'

const StreamForm: React.FC = () => {
	const [name, setName] = useState('')
	const [sourceUrl, setSourceUrl] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await saveStream({ name, inputs: [sourceUrl] })
		navigate('/')
	}

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<TextField
				label='Stream Name'
				value={name}
				onChange={e => setName(e.target.value)}
				fullWidth
				margin='normal'
				required
			/>
			<TextField
				label='Source URL'
				value={sourceUrl}
				onChange={e => setSourceUrl(e.target.value)}
				fullWidth
				margin='normal'
				required
			/>
			<Button type='submit' variant='contained' color='primary'>
				Создать Stream
			</Button>
		</Box>
	)
}

export default StreamForm
