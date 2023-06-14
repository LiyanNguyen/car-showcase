'use client'
import React, { useState } from 'react'
import { SearchManufacturer } from './'

type Props = {}

const SearchBar = (props: Props) => {
	const [manufacturer, setManufacturer] = useState<string>('')

	const handeSearch = () => {

	}

	return (
		<form className='searchbar' onSubmit={handeSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}

export default SearchBar