async function getProduct(uid){
	const res = await fetch(
        `https://storefront-dashboard-21366-default-rtdb.firebaseio.com/products/${uid}.json`
    );
	const product = await res.json();
	return product
}

export { getProduct }