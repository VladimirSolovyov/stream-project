import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:4010/streamer/api/v3/streams/'

interface Stream {
	name: string
	inputs: string[]
}

export const fetchStreams = async (cursor: number) => {
	try {
		const response = await axios.get(
			`${API_BASE_URL}?cursor=${cursor}&limit=100`
		) //TODO не сработал select=name,inputs,stats,dvr.root
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const saveStream = async (stream: Stream) => {
	try {
		const response = await axios.put(`${API_BASE_URL}${stream.name}`, stream)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}
