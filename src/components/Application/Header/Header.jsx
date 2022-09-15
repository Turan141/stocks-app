import React from "react"
import { Link } from "react-router-dom"
import { HeaderMenuItems } from "./HeaderMenuItems/HeaderMenuItems"
import heartIcon from "../../../assets/icons/heart.svg"
import boxIcon from "../../../assets/icons/box.svg"
import storeIcon from "../../../assets/icons/store.svg"

import "./Header.css"

export const Header = () => {
	return (
		<div className='main-header'>
			<div className='main-header_color'></div>
			<div className='main-header_navigation'>
				<ul>
					<li>
						<Link to='/favorites'>
							<HeaderMenuItems
								icon={heartIcon}
								name='Избранное'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<HeaderMenuItems
								icon={boxIcon}
								name='Склад'
							/>
						</Link>
					</li>
					<li>
						<Link to='/deals'>
							<HeaderMenuItems
								icon={storeIcon}
								name='Сделки'
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
