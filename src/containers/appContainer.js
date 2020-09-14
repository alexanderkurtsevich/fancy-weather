import { connect } from 'react-redux';
import App from '../components/App';
import { initialRequest } from '../actions/locationActions';
import { finishBgLoading } from '../actions/settingsActions';

const mapStateToProps = state => {
    return {
        backgroundUrl: state.settings.backgroundUrl,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initialRequest: () => dispatch(initialRequest()),
        finishBgLoading: () => dispatch(finishBgLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);