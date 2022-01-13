import React, { useCallback } from 'react';
import { Pokemon } from './types';

import usePokemon from './usePokemon';

export const Input = () => {
	const { filter, setFilter, pokemon } = usePokemon();

	const onSetFilter = useCallback(
		(event) => setFilter(event.target.value),
		[setFilter]
	);

	return (
		<div>
			<input
				className='
                    mx-auto 
                    flex 
                    justify-center 
                    m-4 
                    text-lg
                    border-solid border-2 
                    bg-gray-100
                    drop-shadow-xs
                    shadow-inner
                    hover:scale-110
                    hover:bg-blue-200
                    rounded-md w-80
                    transition duration-150'
				value={filter}
				onChange={onSetFilter}
			/>
			<div className='m-4 mt-8 p-8 border-2 border-indigo-300/50 rounded-lg hover:bg-violet-100 drop-shadow-md transition duration-150'>
				{pokemon.map((pokemon) => (
					<div key={pokemon.id}>{pokemon.name.english}</div>
				))}
			</div>
		</div>
	);
};
