import { useState, useCallback } from 'react'
import { saveStream } from '../api/streams'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'

const StreamForm = () => {
	const [name, setName] = useState('')
	const [sourceUrl, setSourceUrl] = useState('')
	const navigate = useNavigate()

	const handleNameChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setName(e.target.value)
		},
		[]
	)

	const handleSourceUrlChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSourceUrl(e.target.value)
		},
		[]
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await saveStream({ name, inputs: [sourceUrl] })
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<TextField
				label='Stream Name'
				value={name}
				onChange={handleNameChange}
				fullWidth
				margin='normal'
				required
			/>
			<TextField
				label='Source URL'
				value={sourceUrl}
				onChange={handleSourceUrlChange}
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
