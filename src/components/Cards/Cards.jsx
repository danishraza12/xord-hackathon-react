import "./cards.css"
import { Appointments, NewPatient, Operation, Bank } from '../../static'
import { connect } from 'react-redux';

// Component to display cards
const Cards = ({ cardInfo }) => { 
	return (
		<div className="cardsContainer">
			<div className="card">
				{ cardInfo.map((card, index) => {
					return (
						<div className="cardItem"> 
							<img className={`cardIcon_${index}`} src={Appointments} alt="Appointments" />
							<span className="cardTitle">{ card.title }</span>
							<span className={`card_${index}`}>{ card.value }</span>
						</div>
					)
				}) 
				}
			</div>
		</div>
	)
}

// Getting card information from cardsReducer
const mapStateToProps = state => {
	return { cardInfo: state.cardsInfo}
}

export default connect(mapStateToProps, {})(Cards)
