fetch("products.json")
.then((res) => {
    return res.json()
})
.then((res) => {
    console.log(res)
})
