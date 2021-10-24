import "./cards.css"
import { Appointments, NewPatient, Operation, Bank } from '../../static'
import { connect } from 'react-redux';

// Component to display cards
const Cards = ({ cardInfo }) => { 
	return (
		<div className="cardsContainer">
			<div className="card">
				<div className="cardItem"> 
					<img className="cardIconA" src={Appointments} alt="Appointments" />
					<span className="cardTitle">{ cardInfo[0].title }</span>
					<span className="cardA">{ cardInfo[0].value }</span>
				</div>
				<div className="cardItem"> 
					<img className="cardIconNP" src={NewPatient} alt="New Patients" />
					<span className="cardTitle">{ cardInfo[1].title }</span>
					<span className="cardNP">{ cardInfo[1].value }</span>
				</div>
				<div className="cardItem"> 
					<img className="cardIconO" src={Operation} alt="Operation" />
					<span className="cardTitle">{ cardInfo[2].title }</span>
					<span className="cardO">{ cardInfo[2].value }</span>
				</div>
				<div className="cardItem"> 
					<img className="cardIconHE" src={Bank} alt="Hospital Earning" />
					<span className="cardTitle">{ cardInfo[3].title }</span>
					<span className="cardHE">{ cardInfo[3].value }</span>
				</div>
			</div>
		</div>
	)
}

// Getting card information from cardsReducer
const mapStateToProps = state => {
	return { cardInfo: state.cardsInfo}
}

export default connect(mapStateToProps, {})(Cards)
