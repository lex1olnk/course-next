import React, { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';

import styles from './Rating.module.css';
import StarIcon from './star.svg';
import classNames from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, i: number) => 
			<StarIcon 
				className={classNames(styles.star, {
					[styles.fill]: i < currentRating,
					[styles.editable]: isEditable
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => handleClick(i + 1)}
			/>
		);

		setRatingArray(updateArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) return;
		constructRating(i);
	};

	const handleClick = (i: number) => {
		if (!isEditable || !setRating) return;

		setRating(i);
	}

	return (
		<div className='flex flex-row' {...props}>
			{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
		</div>
  );
};
