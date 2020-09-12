import { connect } from 'react-redux';
import App from '../components/App';
import { initialRequest } from '../actions/locationActions';

const mapStateToProps = state => {
    return {
        backgroundUrl: state.settings.backgroundUrl,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initialRequest: () => dispatch(initialRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);