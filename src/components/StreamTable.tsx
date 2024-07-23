import React, { useState, useEffect } from 'react'
import { fetchStreams } from '../api/streams'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Box,
} from '@mui/material'

interface StreamStats {
	status: string
	online_clients: number
	input_bitrate: number
	output_bitrate: number
}

interface Stream {
	name: string
	stats: StreamStats
}

const StreamTable: React.FC = () => {
	const [streams, setStreams] = useState<Stream[]>([])
	const [page, setPage] = useState(1)
	const [next, setNext] = useState(0)
	const [prev, setPrev] = useState(0)

	useEffect(() => {
		const loadStreams = async () => {
			console.log('loadStream call')
			const data = await fetchStreams(page)
			setNext(() => (data.next ? parseInt(data.next) : -1))
			setPrev(parseInt(data.prev))
			setStreams(data.streams)
		}

		loadStreams()

		const intervalId = setInterval(loadStreams, 10000)

		return () => clearInterval(intervalId)
	}, [page])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Clients</TableCell>
							<TableCell>Input Bitrate</TableCell>
							<TableCell>Output Bitrate</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{streams.map(stream => (
							<TableRow key={stream.name}>
								<TableCell>{stream.name}</TableCell>
								<TableCell>{stream.stats?.status ?? ''}</TableCell>
								<TableCell>{stream.stats?.online_clients ?? ''}</TableCell>
								<TableCell>{stream.stats?.input_bitrate ?? ''}</TableCell>
								<TableCell>{stream.stats?.output_bitrate ?? ''}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
				<Button onClick={() => setPage(prev)} disabled={page === 1}>
					Previous
				</Button>
				<Button onClick={() => setPage(next)} disabled={next === -1}>
					Next
				</Button>
			</Box>
		</Box>
	)
}

export default StreamTable
