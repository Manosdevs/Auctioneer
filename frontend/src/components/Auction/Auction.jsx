import styles from './Auction.module.css'

export function AuctionItem({ title, image, price, id }) {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={image} alt={title} />
			<h1 className={styles.title}>{title}</h1>
			<h2 className={styles.price}>${price}</h2>
		</div>
	)
}
