import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
				<Link to='/'>
					<img src={logo} alt='store' className='navbar-brand'/>
				</Link>
				<ul className='navbar-nav allign-items-center'>
					<li className='nav-item ml-5'>
						<Link to='/' className='nav-link'>
							Products
						</Link>
					</li>
				</ul>
				<Link to='/Cart' className='ms-auto'>
					<ButtonContainer>
						<span className='mr-554'>
							<i className='fas fa-cart-plus' />
						</span>
						My cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		)
	}
}

const NavWrapper = styled.nav`
	background: var(--mainBlue)!important;
	.nav-link {
		color:var(--mainWhite)!important;
		font-size: 1.3rem;
		text-transform: capitalize!important;
	}
`


// const ButtonConatiner = styled.button`
// 	text-transform:capitalize;
// 	font-size: 1.4rem;
// 	background: transparent;
// 	border: 0.05rem solid var(--lightBlue);
// 	color: var(--lightBlue);
// 	border-radius: 0.5rem;
// 	padding: 0.2rem 0.5rem;
// 	cursor: pointer;
// 	margin: 0.2rem 0.5rem 0.2rem 0;
// 	transition:all 0.5s ease-in-out;
// 	&:hover {
// 		background:var(--lightBlue);
// 		color:var(--mainBlue)
// 	}
// 	&:focus {
// 		outline: none;
// 	}

// `;















