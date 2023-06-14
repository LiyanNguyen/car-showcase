import Image from 'next/image'
import React from 'react'

type Props = {
	otherClasses: string
}

const SearchButton = (props: Props) => {
	const { otherClasses } = props

	return (
		<button className={`-ml-3 z-10 ${otherClasses}`} type='submit'>
			<Image className='object-contain' src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40}/>
		</button>
	)
}

export default SearchButton