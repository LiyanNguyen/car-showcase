'use client'
import React, { FormEvent, useState } from 'react'
import { SearchButton, SearchManufacturer } from './'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {}

const SearchBar = (props: Props) => {
	const [manufacturer, setManufacturer] = useState<string>('')
	const [model, setModel] = useState<string>('')
	const router = useRouter()

	const handeSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault() //dont refresh
		if (manufacturer === '' && model === '') return alert('Please fill in the search bar')
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search)

		if (model) searchParams.set('model', model)
		else searchParams.delete('model')

		if (manufacturer) searchParams.set('manufacturer', manufacturer)
		else searchParams.delete('manufacturer')

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`
		router.push(newPathname)
	}

	return (
		<form className='searchbar' onSubmit={handeSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses='sm:hidden'/>
			</div>
			<div className='searchbar__item'>
				<Image src='/model-icon.png' width={25} height={25} alt='car model' className='absolute w-[20px] h=[20px] ml-4' />
				<input
					className='searchbar__input'
					type="text"
					name='model'
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder='Tiguan'
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
				<SearchButton otherClasses='max-sm:hidden' />
		</form>
	)
}

export default SearchBar