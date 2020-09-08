import { connect } from 'react-redux';
import Weather from '../components/Weather/Weather';

const mapStateToProps = state => {
    return {
        place: state.location.place,
        mainDay: state.weather.main,
        otherDays: state.weather.other,
        language: state.settings.language,
        degrees: state.settings.degrees,
    }
}

export default connect(mapStateToProps)(Weather);