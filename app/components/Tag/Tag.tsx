import React from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import classNames from 'classnames';

export const Tag = ({ size = 'm', children, color, className, href, ...props }: TagProps): JSX.Element => (
    <div className={classNames(className, styles.tag, {
		[styles.m]: size === 'm',
		[styles.s]: size === 's',
		[styles.red]: color === 'red',
		[styles.gray]: color === 'gray',
		[styles.green]: color === 'green',
		[styles.primary]: color === 'primary'
		})}
		{...props}
	>
		{
			href 
				? <a href={href}>{children}</a>
				: <>{children}</>
		}
    </div>
);
