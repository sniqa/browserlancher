import { useCallback } from 'react'

export interface NavigateProps {
	icon?: string
	title: string
	url: string
	path: string
}

const Navigate = ({ title, icon = '', path, url }: NavigateProps) => {
	const handleOnClick = useCallback(async () => {
		const res = await window.electronApis.lanchBrowser({ path, url })
	}, [])

	return (
		<div
			className="w-36 h-36  rounded-md box-border py-2 cursor-pointer hover:bg-gray-100 flex flex-col items-center content-start"
			onClick={handleOnClick}
		>
			<div className="h-20 w-20 bg-gray-300 rounded-md overflow-hidden ">
				{icon && <img src={icon} alt="" />}
			</div>

			<p className="line-clamp-2 text-center p-1">{title}</p>
		</div>
	)
}

export default Navigate
