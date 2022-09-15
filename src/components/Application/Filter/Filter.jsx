import React from "react"
import { FilterItem } from "./FilterItem"
import useStore from "../../../store/store"
import SearchBtn from "../../../assets/icons/searchBtn.svg"
import "./Filter.css"

export const Filter = () => {
	const setFilters = useStore((state) => state.filterByName)

	let searchWord = null

	const setFilterByNameHandler = (e) => {
		searchWord = e.target.value
	}

	const enterBtnHandler = (e) => {
		if (e.key === "Enter") {
			setFilters(e.target.value)
		}
	}

	const filterTypes = [
		"Все типы",
		"Прямые продажи",
		"Аукцион",
	]
	const filterTypesMap = filterTypes?.map((type) => (
		<li key={type}>
			<FilterItem type={type} />
		</li>
	))
	return (
		<div className='filter-main'>
			<div className='filter-type'>
				<ul>{filterTypes.length && filterTypesMap}</ul>
			</div>
			<div className='filter-name'>
				<input
					placeholder='Введите название товара'
					onKeyDown={(e) => enterBtnHandler(e)}
					type='text'
					onChange={(e) => setFilterByNameHandler(e)}
				></input>
				<img
					src={SearchBtn}
					alt='searchBtn'
					onClick={() => setFilters(searchWord)}
				/>
			</div>
		</div>
	)
}
