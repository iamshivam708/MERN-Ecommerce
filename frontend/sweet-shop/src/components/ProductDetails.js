import React, { Component } from 'react';
import axios from 'axios'
import '../app.css'

class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:localStorage.getItem("isLoggedIn") || sessionStorage.getItem('isLoggedIn'),
            product:{},
            id: this.props.match.params.id,
            productDetails:'',
            productDescription:[],
            products:[],
            userEmail: localStorage.getItem("user") || sessionStorage.getItem('user'),
            userId:'',
            review:'',
            stars:'',
            reviews:[],
            userName:'',
            alreadyAdded:0,
            alreadyAddedInWishlist:0
        }
    }

    componentDidMount = () =>{      
        const url= `http://localhost:5000/product/${this.state.id}`
        axios.get(url).then((res) =>{
            if(res.data !== 'none'){
                this.setState({
                    product: res.data,
                    productDetails: res.data.productDetails
                })
            }else{
                this.setState({
                    product: null
                })
            }
        }).catch((err) =>{
            console.log(err)
        })

        const url2 = `http://localhost:5000/productDetails/${this.state.productDetails}`
        axios.get(url2).then((res) =>{
            if(res.data !== 'none'){
                this.setState({
                    productDescription: res.data[0]
                })
            }else{
                this.setState({
                    productDescription: null
                })
            }
        }).catch(err =>{
            console.log(err)
        })

        const url3="http://localhost:5000/product"
        axios.get(url3).then((res) =>{
            if(res.data !== 'none'){
                this.setState({
                    products: res.data
                })
            }else{
                this.setState({
                    products: null
                })
            }
        }).catch((err) =>{
            console.log(err)
        })

        const url4 = `http://localhost:5000/user/details/${this.state.userEmail}`
        axios.get(url4).then((res) =>{
            this.setState({
                userId: res.data._id,
                userName: res.data.firstName
            })
        }).catch((err) =>{
            console.log(err)
        })

        const url5 = `http://localhost:5000/productDetails/review/${this.state.id}`
        axios.get(url5).then((res) =>{
            this.setState({
                reviews: res.data
            })
        }).catch((err) =>{
            console.log(err);
        })

        var url10 = `http://localhost:5000/cart/product/${this.state.id}`
            axios.get(url10).then(res =>{
                this.setState({
                    alreadyAdded: res.data.count
                })
            }).catch(err =>{
                console.log(err)
            })

            var url11 = `http://localhost:5000/wishlist/product/${this.state.id}`
            axios.get(url11).then(res =>{
                this.setState({
                    alreadyAddedInWishlist: res.data.count
                })
            }).catch(err =>{
                console.log(err)
            })
    }

    handleCart = (e) =>{
        e.preventDefault();
        if(this.state.isLoggedIn){
            if(this.state.alreadyAdded !== 0){
                alert('product already added in the cart');
            }else{
                const cartProduct = {
                    productId: this.state.id,
                    userId:this.state.userId,
                    productName: this.state.product.name,
                    productQty: this.state.product.quantity,
                    qty:1,
                    price: this.state.product.sellingPrice
                }
                const url = "http://localhost:5000/cart"
                axios.post(url,cartProduct).then((res) =>{
                    this.props.history.push("/cart/"+ this.state.userId)
                    window.location.reload()
                }).catch((err) =>{
                    console.log(err)
                })
            }
        }else{
            alert('You need to login to add product to the cart');
        }
    }

    handleWishlist = (e) =>{
        e.preventDefault();
        if(this.state.isLoggedIn){
            if(this.state.alreadyAddedInWishlist !== 0){
                alert('product already added in the wishlist');
            }else{
            const WishlistProduct = {
                productId: this.state.id,
                userId:this.state.userId,
                productName: this.state.product.name,
                productQty: this.state.product.quantity,
                price: this.state.product.sellingPrice
            }
            const url = "http://localhost:5000/wishlist"
            axios.post(url,WishlistProduct).then((res) =>{
                this.props.history.push("/wishlist/"+ this.state.userId)
                window.location.reload()
            }).catch((err) =>{
                console.log(err)
            })
        }
        }else{
            alert('You need to login to add product to the cart');
        }
    }

    handleSimilar(id){
        return (event) =>{
            event.preventDefault();
            this.props.history.push("/product/details/"+ id)
            window.location.reload();
        }
    }

    handleReview = (e) =>{
        e.preventDefault();
        const review = {
            productId: this.state.id,
            userId:this.state.userId,
            userName: this.state.userName,
            review: this.state.review,
            stars: this.state.stars
        }
        const url="http://localhost:5000/productDetails/review"
        axios.post(url, review).then(res =>{
            window.location.reload();
        }).catch(err =>{
            console.log(err);
        })

    }
    
    render() {
        const {product, productDescription, products, reviews} = this.state
        return (
            <div className="container-fluid">
               <h3 className="text-center mt-4 mb-3">Product Details</h3>

               {/* product details */}
               <div className="container-fluid">
                   <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="row justify-content-center">
                            <img src="/Images/rasgulla.jpg" alt="..." style={{maxWidth:"70%"}} />
                        </div>
                        <div className="row mt-3">
                            <div className="col-3">
                                <img src="/Images/rasgullaparts.jpeg" width="80%"  alt="..." />
                            </div>
                            <div className="col-3">
                                <img src="/Images/rasgullaparts.jpeg" width="80%" alt="..." />
                            </div>
                            <div className="col-3">
                                <img src="/Images/rasgullaparts.jpeg" width="80%" alt="..." />
                            </div>
                            <div className="col-3">
                                <img src="/Images/rasgullaparts.jpeg" width="80%" alt="..." />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3 className="text-muted">Product Description</h3>
                            <hr/>
                            <h4 className="lead">Key Features</h4>
                            <p>{productDescription.keyFeatures}</p>
                            <hr/>
                            <h4 className="lead">Description</h4>
                            <p>{productDescription.description}</p>
                            <hr/>
                            <h4 className="lead">About Seller</h4>
                            <p>{productDescription.seller}</p>
                            <hr/>
                            <h4 className="lead">Manufacturing Details</h4>
                            <p>{productDescription.manufacturingDetails}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="text-muted">{product.name}</h3>
                        <p className="text-danger"><strike>MRP: {product.mrp}</strike></p>
                        <h4 className="text-primary">Selling Price: {product.sellingPrice}</h4>
                        <p>Qty: {product.quantity}g</p>
                        <button onClick={this.handleCart} className="btn btn-primary">Add to Cart</button>&nbsp;&nbsp;
                        <button onClick={this.handleWishlist} className="btn btn-primary">Add to Wishlist</button>
                    </div>
                   </div>
               </div>
           

                {/* similar products */}
                <div className="container-fluid mt-4">
                    <h3 className="text-center">Similar Products</h3>
                    <div className="carousel" data-flickity='{ "groupCells": true,"cellAlign": "left", "contain": true,"freeScroll": true }'>
                        {products.map((product) =>(
                            <div className="carousel-cell" key={product._id} align="center">
                                <img className="mt-3" src="/Images/rasgullaparts.jpeg" width="90%" alt="..." />
                                <h3 className="lead mt-2">{product.name}</h3>
                                <h3><span className="text-danger" style={{fontSize:"2em"}}>${product.sellingPrice}</span>&nbsp;&nbsp;<strike>${product.mrp}</strike></h3>
                                <button onClick={this.handleSimilar(product._id)} className="btn btn-primary">Go to Product</button>
                            </div>
                        ))}
                    </div>
                </div>
            
                {/* customer reviews */}
                <div className="container mt-5">
                    <div className="row" align="center">
                        <h3 className="lead">Customer Review</h3>
                        <form method="post" onSubmit={this.handleReview}>
                            <div className="col-4">
                                <input placeholder="Enter Review" className="form-control" type="text" name="review" onChange={e => this.setState({review: e.target.value})} />
                            </div>
                            <div className="col-4 mt-2">
                                <input placeholder="Give Stars (1 to 5)" className="form-control" type="text" name="stars" onChange={e => this.setState({stars: e.target.value})} />
                            </div>
                            <div className="col-4 mt-2">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="row mt-5" align="center">
                        <h3 className="lead">All Reviews</h3>
                        {reviews.map((review) =>(
                            <div className="row" key={review._id}>
                                <div className="col-4">
                                    <img className="img-rounded" src="/Images/sweet.png" width="50" height="50" alt="..." />
                                </div>
                                <div className="col-8">
                                    <h3>{this.state.userName}</h3>
                                    <p>{review.review}</p>
                                    <p>{review.stars}</p>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;