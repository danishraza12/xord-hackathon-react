import React from 'react';
import "./header.css";
import { Logo, Avatar, Search } from '../../static';
import { NotificationsNone } from '@material-ui/icons';

const Header = ({ term, setTerm }) => {
	return (
		<div className="header">
			<div className="headerWrapper">
				<div className="headerLeft">
					<span className="logo"><img src={Logo} alt="App Logo" /></span>
				</div>
				<div class="container">
					<form action="/" method="GET" className="form">
						<button type="submit" className="search-button">
							<img src={Search} alt="Search" />
						</button>
						<input type="text" placeholder="Search" className="search-field" value={term} onChange={e => setTerm(e.target.value)} />
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