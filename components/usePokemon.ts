import { useState, useEffect, useMemo, useCallback } from 'react';
import { Pokemon } from './types';

export default function usePokemon(): {
	pokemon: Pokemon[];
	filter: string;
	setFilter: (filter: string | ((filter: string) => string)) => void;
	selected: Set<string>;
	selectPokemon: (name: string) => void;
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

	const [selected, setSelected] = useState<Set<string>>(new Set());

	const selectPokemon = useCallback((name: string) => {
		setSelected((currentSet) => {
			const newSet = new Set(currentSet);
			if (currentSet.has(name)) {
				newSet.delete(name);
			} else {
				newSet.add(name);
			}
			return newSet;
		});
	}, []);

	return {
		pokemon,
		filter,
		setFilter,
		selected,
		selectPokemon,
	};
}
