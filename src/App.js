import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Typography, Button, ButtonGroup, TextField, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function App() {
	const [inputAmount, setInputAmount] = useState(0);
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const increment = () => {
		dispatch({type: 'INC'});
	};
	const decrement = () => {
		dispatch({type: 'DEC'});
	};
	const minus = () => {
		dispatch({type: 'MIN', payload: inputAmount});
	};
	const addto = () => {
		dispatch({type: 'PLS', payload: inputAmount});
	};
	const multiply = () => {
		dispatch({type: 'MPY', payload: inputAmount});
	};
	const divide = () => {
		dispatch({type: 'DIV', payload: inputAmount});
	};
	const inputAmountHandler = (event) => {
		setInputAmount(event.target.value);
	};
	return (
		<Box
			width={1}
			height='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			bgcolor='darkgrey'>
			<Box
				maxWidth={415}
				p={3}
				bgcolor='#fff'
				borderRadius={4}
				boxShadow='0px 0px 29px 6px rgba(0,0,0,0.35)'>
				<Typography variant='h3' mb={4}>
					<span style={{opacity: 0.85}}>Simple</span> Counter App
				</Typography>
				<TextField
					type='number'
					label='Amount'
					variant='outlined'
					value={inputAmount}
					onChange={inputAmountHandler}
					sx={{width: '100%'}}
				/>
				<ButtonGroup
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '0.5rem',
						marginTop: '0.5rem',
						marginBottom: '0.5rem',
					}}>
					<Button
						className='primary-button'
						variant='contained'
						onClick={addto}>
						add {inputAmount}
					</Button>
					<Button
						className='primary-button'
						variant='contained'
						onClick={minus}>
						minus {inputAmount}
					</Button>
					<Button
						className='primary-button'
						variant='contained'
						onClick={multiply}>
						multiply by {inputAmount}
					</Button>
					<Button
						className='primary-button'
						variant='contained'
						onClick={divide}
						disabled={counter === 0 || inputAmount === 0}>
						divide by {inputAmount}
					</Button>
					<Button
						className='primary-button'
						variant='contained'
						onClick={multiply}>
						clear
					</Button>
				</ButtonGroup>
				<Box display='flex' justifyContent='center' alignItems='center' mt={4}>
					<Typography variant='h6'>Total</Typography>
				</Box>
				<Box display='flex' justifyContent='center' alignItems='center'>
					<ButtonGroup>
						<Button onClick={decrement}>
							<RemoveIcon fontSize='large' />
						</Button>
						<Typography variant='h1'>
							{Number.isInteger(counter) ? counter : counter.toFixed(5)}
						</Typography>
						<Button onClick={increment}>
							<AddIcon fontSize='large' />
						</Button>
					</ButtonGroup>
				</Box>
				<Box mt={4}>
					<Typography variant='body1' gutterBottom>
						Type directly into the amount column or increment using the up and
						down arrows.
					</Typography>
					<Typography variant='body2'>
						State is managed with Redux and styled through customised Material
						UI createTheme().
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
