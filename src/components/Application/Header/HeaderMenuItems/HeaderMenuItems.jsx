import React from "react"
import "./HeaderMenuItems.css"

export const HeaderMenuItems = ({ icon, name }) => {
	return (
		<div className='navigation-items'>
			<img
				src={icon}
				width='20px'
				height='20px'
				alt='name'
			/>
			<span>{name}</span>
		</div>
	)
}
