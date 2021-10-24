import React from 'react';
import "./header.css";
import { Logo, Avatar, Search } from '../../static';
import { NotificationsNone } from '@material-ui/icons';


const Header = (props) => {
	return (
		<div className="header">
			<div className="headerWrapper">
				<div className="headerLeft">
					<span className="logo"><img src={Logo} alt="App Logo" /></span>
				</div>
				<div class="container">
					<form action="/" method="GET" class="form">
						<button type="submit" class="search-button">
							<img src={Search} alt="Search" />
						</button>
						<input type="search" placeholder="Search" class="search-field" />
					</form>
				</div>
				<div className="headerRight">
					<div className="headerIconContainer">
						<NotificationsNone />
						<span className="headerIconBadge">9</span>
					</div>
					<img src={Avatar} alt="Avatar" className="headerAvatar" />
				</div>
			</div>
		</div>
    )
}

export default Header