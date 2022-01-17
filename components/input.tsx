import React, { useCallback } from 'react';
import { Pokemon } from './types';
import Image from 'next/image';

import usePokemon from './usePokemon';

export const Input = () => {
	const { filter, setFilter, pokemon } = usePokemon();

	const onSetFilter = useCallback(
		(event) => setFilter(event.target.value),
		[setFilter]
	);

	return (
		<main>
			<input
				className='
                    mx-auto 
                    flex 
                    justify-center 
                    m-4 
                    text-lg
                    border-solid border-2 
                    bg-sky-100
                    drop-shadow-xs
                    shadow-inner
                    hover:scale-110
                    hover:bg-sky-300
                    rounded-md w-80
                    transition duration-150'
				value={filter}
				onChange={onSetFilter}
			/>
			<div
				className='
					m-4 mt-8 p-8 border-2 border-blue-200/50 rounded-lg
					hover:bg-sky-100 drop-shadow-lg transition duration-150
					grid grid-cols-2 gap-6 sm:grid-cols-6
					
					'>
				{pokemon.map((pokemon) => (
					<>
						<Image
							src={`/pokemon/${pokemon.name.english.toLowerCase()}.jpg `}
							alt='Pokemon'
							width={500}
							height={500}
							priority
						/>
						<div className='mb-4 mt-4 p-8' key={pokemon.id}>
							{pokemon.name.english}
						</div>
					</>
				))}
			</div>
		</main>
	);
};
