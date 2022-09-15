import React, { useState } from "react"
import useStore from "../../../store/store"

export const FilterItem = ({ type }) => {
	const setFilters = useStore((state) => state.filterItems)

	return (
		<>
			<p
				style={{
					color: "#969DC3",
					cursor: "pointer",
				}}
				onClick={() => {
					setFilters(
						type === "Аукцион"
							? "auction"
							: type === "Прямые продажи"
							? "single_offer"
							: ""
					)
				}}
			>
				{type}
			</p>
		</>
	)
}
