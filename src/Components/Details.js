import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';


export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) =>{
					const { id, title, company, img, info, inCart, price } =
						value.detailProduct;
						return (
							<div className='container py-5'>
								<div className='row'>
									<div className='col-10 mx-auto text-centertext-slanted text-blue my-5'>
										<h1>{title}</h1>
									</div>
								</div>
								<div className='row'>
									<div className='col-10 mx-auto col-md-6 my-3'>
										<img src={img} className='img-fluid' alt='Product' />
									</div>
									<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
										<h1>model: {title} </h1>
										<h4 className='text-title text-uppercase text-muted mt-3 mb-3'>
											made by: <span className='text-uppercase'>{company}</span> 
										</h4>
										<h4 className='text-blue'>
											<strong>
												price: <span>₦</span> {price} 
											</strong>
										</h4>
										<p className='text-capitalize font-weight-bold mt-3 mb-0'>
											Some info:
										</p>
										<p className='text-muted lead'>
											{info}
										</p>
										<div className>
											<Link to='/'>
												<ButtonContainer>
													Back To Product
												</ButtonContainer>
											</Link>
											<ButtonContainer 
												cart
												disabled={ inCart ? true : false }
												onClick={() => {
													value.addToCart(id);
													value.openModal(id);
												}}>
												{inCart ? 'inCart' : 'add to cart'}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
						);
					}
				}
			</ProductConsumer>
		)
	}
}
