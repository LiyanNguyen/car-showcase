'use client'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'

type Props = {
	title: string
	containerStyles?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	btnType?: 'button' | 'submit'
}

const CustomButton = (props: Props) => {
	const { title, containerStyles, handleClick, btnType } = props
	
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
			>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}

export default CustomButton