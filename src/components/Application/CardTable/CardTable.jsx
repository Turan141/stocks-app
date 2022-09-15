import React from "react"
import { Card } from "./Card"
import "./CardTable.css"

export const CardTable = ({ items }) => {
	return (
		<div className='main-card'>
			{items?.length && (
				<ul>
					{items.map((cardInfo) => (
						<li
							key={cardInfo?.id}
							className='main-card_item'
						>
							<Card cardInfo={cardInfo} />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
