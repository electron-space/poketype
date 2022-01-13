import { useState, useEffect, useMemo } from 'react';
import { Pokemon } from './types';

export default function usePokemon(): {
	pokemon: Pokemon[];
	filter: string;
	setFilter: (filter: string | ((filter: string) => string)) => void;
} {
	const [filter, setFilter] = useState('');
	const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

	useEffect(() => {
		fetch('./pokemon.json')
			.then((res) => res.json())
			.then((pokemon: Pokemon[]) => setAllPokemon(pokemon));
	}, []);

	const pokemon = useMemo(() => {
		const lowerCase = filter.toLowerCase();
		return allPokemon
			.filter(({ name: { english } }) =>
				english.toLowerCase().includes(lowerCase)
			)
			.slice(0, 20);
	}, [filter, allPokemon]);

	return {
		pokemon,
		filter,
		setFilter,
	};
}
