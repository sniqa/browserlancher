import { useReducer, useState } from 'react'
import Navigate, { NavigateProps } from './Navigate'
import Searchbar from './Searchbar'

const origin = Array.from({ length: 20 }, (_, index) => ({
	title: `hello ${index}, this is test navigate, sjgkslg  `,
	url: 'https://bing.com',
	path: 'browserlist',
}))

interface Action {
	type: string
	payloay: NavigateProps[]
	word?: string
}

const reducer = (state: NavigateProps[], action: Action) => {
	const { type, payloay } = action

	switch (type) {
		case 'init':
			return (state = payloay as NavigateProps[])
		case 'fuzzy': {
			return payloay.filter((item) => item.title.includes(action.word || ''))
		}
		case 'reset':
			return payloay
		default:
			return state
	}
}

export default () => {
	const [data, setData] = useState<NavigateProps[]>(origin)

	const [state, dispatch] = useReducer(reducer, data)

	const handleOnChange = (value: string) => {
		dispatch({
			type: 'fuzzy',
			payloay: data,
			word: value,
		})
	}

	return (
		<div className="flex flex-col w-full h-full">
			<Searchbar onChange={handleOnChange} />

			<div className="h-16" />

			<nav className="text-blue-500 w-full grid grid-cols-auto-10rem grid-rows-auto-9rem grid-rows justify-center overflow-auto content-box">
				{state.map((item) => (
					<Navigate key={item.title} {...item} />
				))}
			</nav>
		</div>
	)
}
