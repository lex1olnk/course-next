'use client';

import { useState, useEffect } from 'react';
import { Button, Htag, Rating, Tag } from '../components';

export default function Home() {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(3);

	useEffect(() => {
		console.log('Counter' + counter);
		
		return function cleanup() {
			console.log('Unmounted');
		};
	}, []);

	return (
		<div>
			<Htag tag='h1'>kekw</Htag>
			<Button appearance='primary' arrow='right' onClick={() => setCounter(counter + 1)}>primary</Button>
			<Button appearance='ghost' arrow='down' >ghost</Button>
			<Tag>asdasd</Tag>
			<Tag color='red'>{counter}</Tag>
			<Tag size='s' color='primary' href="/">asdasd</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Rating rating={rating} />
		</div>
	);
}
