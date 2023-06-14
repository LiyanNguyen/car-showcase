import { car } from '@/types/car'
import React from 'react'

type Props = {
	isOpen: boolean
	closeModal: () => void
	car: car
}

const CarDetails = (props: Props) => {
	const { isOpen, closeModal, car } = props
	
	return (
		<div>CarDetails</div>
	)
}

export default CarDetails