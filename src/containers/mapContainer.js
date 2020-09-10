import { connect } from 'react-redux';
import Map from '../components/Map/Map';

const mapStateToProps = state => {
    return {
        geometry: state.location.geometry,
        isInitialized: state.settings.isInitialized,
        lat: state.location.lat,
        lng: state.location.lng,
    }
}

export default connect(mapStateToProps)(Map);