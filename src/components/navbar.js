import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className="o_main_navbar">
					<a className="fa o_menu_toggle fa-th" > </a>
					<div className="o_menu_brand" role="button">Dự án</div>
					<ul className="o_menu_systray">
						<li className="o_user_menu">
							<a>Nguyễn Văn A</a>
						</li>
						<li className="o_user_menu">
							<a className="dropdown-toggle" data-toggle="dropdown">
								<img className="img-circle oe_topbar_avatar" src="/images/image" alt="avatar" />
							</a>
							<ul className="dropdown-menu" role="menu">
								<li><a data-menu="account" >My account</a></li>
								<li><a data-menu="logout" >Log out</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
