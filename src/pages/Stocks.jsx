import React, { useEffect } from "react"
import { CardTable } from "../components/Application/CardTable/CardTable"
import useStore from "../store/store"

export const Application = () => {
	const items = useStore((state) => state?.Items)
	const filters = useStore((state) => state?.Filters)
	const filtersByName = useStore(
		(state) => state.FilterByName
	)
	const itemsJsonURL = useStore(
		(state) => state.itemsJsonURL
	)
	const filteredByNameItems =
		filtersByName?.length &&
		items?.length &&
		items?.filter((item) => {
			return (
				item?.title
					?.toLowerCase()
					.indexOf(filtersByName.toLowerCase()) !== -1
			)
		})

	const filteredItems =
		filters?.length &&
		items?.length &&
		items?.filter((item) => item?.item_seller === filters)

	const stockedItems =
		items?.length &&
		items?.filter((item) => item.isStocked === "true")

	const fetch = useStore((state) => state.fetch)

	useEffect(() => {
		if (!items?.length) {
			fetch(itemsJsonURL)
		}
	}, [])

	return (
		<>
			<div className='Card'>
				<CardTable
					items={
						filters?.length
							? filteredItems
							: filteredByNameItems?.length
							? filteredByNameItems
							: stockedItems
					}
				/>
			</div>
		</>
	)
}
