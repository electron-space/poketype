import React, { useCallback } from 'react';

import usePokemon from './usePokemon';
import PokemonCard from './pokemonCard';

export const Input = () => {
	const { filter, setFilter, pokemon, selectPokemon, selected } = usePokemon();

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
                    bg-sky-100
                    drop-shadow-xs
                    shadow-inner
                    hover:scale-150
                    hover:bg-sky-300
                    rounded-md md:w-80
                    transition duration-150'
				value={filter}
				onChange={onSetFilter}
			/>
			<div
				className='
					m-4 mt-8 p-8 border-4
					border-blue-200/50 rounded-lg
					hover:bg-sky-200 
					relative
					transition duration-150
					grid grid-cols-1 gap-4
					md:grid-cols-2 lg:grid-cols-6 
					bg-gray-200
									
					'>
				{pokemon.map((pokemon) => (
					<PokemonCard
						key={pokemon.id}
						{...pokemon}
						selected={selected.has(pokemon.name.english)}
						onSelected={selectPokemon}
					/>
				))}
			</div>
		</div>
	);
};
