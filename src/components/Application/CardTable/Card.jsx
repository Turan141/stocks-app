import React, { useState } from "react"
import useStore from "../../../store/store"
import geo from "../../../assets/icons/geo_15.svg"
import heart from "../../../assets/icons/heart.svg"
import whiteheart from "../../../assets/icons/whiteheart.svg"
import "./CardTable.css"

export const Card = ({ cardInfo }) => {
	const [sold, setSold] = useState(false)
	const [fade, setFade] = useState(false)
	const setTrade = useStore((state) => state.setTrade)
	const setFavorite = useStore((state) => state.setFavorite)

	const removeFromList = () => {
		setFade(true)
		setTimeout(() => setTrade(cardInfo?.id), 700)
	}

	const makeFavorite = () => {
		setFade(true)
		setTimeout(() => setFavorite(cardInfo?.id), 700)
	}

	return (
		<div className={fade ? "fade" : "card_item"}>
			<div className='main-card_img'>
				<img src={cardInfo?.img} alt='itemImg'></img>
			</div>
			<div className='main-card_info'>
				<p style={{ color: "gray" }}>
					{cardInfo?.item_seller === "single_offer"
						? "Прямые продажи"
						: "Аукцион"}
				</p>
				<p
					style={{
						fontSize: "1.3rem",
						color: "#2D3B87",
						fontWeight: "600",
					}}
				>
					{cardInfo?.title}
				</p>
				<p
					style={{
						width: "200px",
						backgroundColor: "#F4F5F9",
						padding: "7px",
						borderRadius: "5px",
						display: "flex",
						alignItems: "center",
						gap: "5px",
					}}
				>
					<span>
						<img src={geo}></img>
					</span>
					{cardInfo?.location}
				</p>
				<p
					style={{
						width: "100px",
						backgroundColor: "#F4F5F9",
						padding: "7px",
						borderRadius: "5px",
					}}
				>
					<span style={{ color: "gray" }}>Вид товара </span>
					<br></br>
					{cardInfo?.item_type}
				</p>
				<p>{cardInfo?.description}</p>
			</div>
			<div className='main-card_price'>
				<div>
					<p
						style={{
							fontWeight: "600",
							fontSize: "1.7rem",
							padding: "0 7px",
						}}
					>
						{cardInfo?.price}
					</p>
					<p
						style={{
							padding: "0 7px",
							borderRadius: "5px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<span style={{ color: "gray" }}>
							Количество
						</span>
						{cardInfo?.qty}
					</p>
					<p
						style={{
							padding: "0 7px",
							borderRadius: "5px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<span style={{ color: "gray" }}>
							Стоимость за штуку
						</span>
						{cardInfo?.single_pricece}
					</p>
				</div>
				<div className='change-basket'>
					<button
						disabled={sold}
						style={{
							cursor: sold ? "inherit" : "pointer",
							backgroundColor: sold ? "white" : "#F4F5F9",
							color: sold ? "gray" : "black",
						}}
						onClick={() => {
							cardInfo?.isTrade === "false" &&
								removeFromList()
							cardInfo?.isTrade === "true" && setSold(true)
						}}
					>
						{cardInfo?.isTrade === "false"
							? "Добавить в сделки"
							: sold
							? "Оплачено"
							: cardInfo?.isTrade === "true"
							? "Оплатить"
							: "Неизвестно"}
					</button>
					<span
						style={{
							backgroundColor:
								cardInfo?.isFavorite === "true"
									? "#2D3B87"
									: "#F4F5F9",
							width: "35px",
							borderRadius: "5px",
						}}
					>
						<img
							onClick={makeFavorite}
							src={
								cardInfo?.isFavorite === "true"
									? whiteheart
									: heart
							}
							alt='heartIcon'
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
