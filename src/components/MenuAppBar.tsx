import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

const StyledLink = styled(Link)({
	textDecoration: 'none',
	color: 'inherit',
	margin: '0 10px',
})

const Logo = styled('img')({
	height: '100px',
})

const MenuAppBar: React.FC = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<StyledLink to='/'>
					<Logo src='/logo.png' alt='logo' />
				</StyledLink>
				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1 }}
				></Typography>
				<StyledLink to='/'>
					<Button color='inherit'>Таблица stream</Button>
				</StyledLink>
				<StyledLink to='/create'>
					<Button color='inherit'>Добавление stream</Button>
				</StyledLink>
			</Toolbar>
		</AppBar>
	)
}

export default MenuAppBar
