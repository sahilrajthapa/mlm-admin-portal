const host = 'http://localhost:3001'
const url = {
    salesmen: '/salesmen',
    products: '/products',
    orders: '/orders'
}

for (var key in url) {
    url[key] = host + url[key]
}

export default url