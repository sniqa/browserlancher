import React, { useCallback, useState } from 'react'

interface SearchbarProps {
	onChange?: (value: string) => void
}

const Searchbar = ({ onChange }: SearchbarProps) => {
	const [text, setText] = useState('')

	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value.trim() || ''

			setText(value)

			onChange && onChange(value)
		},
		[]
	)

	return (
		<div className="flex justify-center py-4 h-16 fixed w-full">
			<div className="border border-blue-400 flex items-center p-1 rounded-md">
				<input
					type="text"
					defaultValue={text}
					onChange={handleOnChange}
					className={`no-outline outline-none w-48 px-1 text-sm h-4`}
					placeholder={`搜索`}
				/>

				<svg
					fill=""
					height={`20px`}
					width={`20px`}
					viewBox="0 0 16 16"
					stroke="rgb(14 165 233)"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"></path>
				</svg>
			</div>
		</div>
	)
}

export default Searchbar
