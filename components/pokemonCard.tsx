import { Pokemon } from './types';
import Image from 'next/image';

export const PokemonCard: React.FunctionComponent<
	Pokemon & {
		selected: boolean;
		onSelected: (name: string) => void;
	}
> = ({ name, type, base, selected, onSelected }) => (
	<>
		<Image
			src={`/pokemon/${name.english.toLowerCase()}.jpg `}
			alt='Pokemon'
			width={500}
			height={500}
			priority
			className='rounded-lg hover:scale-110 transition duration-150 cursor-pointer '
		/>
		<div className='mb-4 mt-4 p-8 '>
			<div className='grid grid-rows-2 grid-cols-2 '>
				{' '}
				<div>
					{' '}
					<div className='font-bold text-lg '>{name.english}</div>
				</div>
				<button
					onClick={() => onSelected(name.english)}
					className='rounded-lg border-2 bg-gray-200  focus:outline-none focus:bg-fuchsia-300 focus:hidden'>
					{selected ? 'Selected ' : 'Not Selected'}
				</button>
			</div>

			<div className='italic text-m'>{type.join(', ')}</div>
			<div className=' grid grid-rows-2 grid-cols-2 mt-4 '>
				{Object.keys(base).map((k) => (
					<>
						<div className='font-bold'>{k}</div>
						<div>{base[k]}</div>
					</>
				))}
			</div>
		</div>
	</>
);

export default PokemonCard;
