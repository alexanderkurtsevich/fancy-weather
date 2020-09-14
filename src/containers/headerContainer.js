import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { selectLanguage, openCloseSelect, selectDegrees, changeBackground, searchRequest } from '../actions/settingsActions';
import { initialRequest } from '../actions/locationActions';

const mapStateToProps = state => {
    return {
        language: state.settings.language,
        degrees: state.settings.degrees,
        isSelectOpened: state.settings.isSelectOpened,
        notification: state.settings.notification,
        isBgLoading: state.settings.isBgLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCloseSelect: () => dispatch(openCloseSelect()),
        selectLanguage: (language) => dispatch(selectLanguage(language)),
        selectDegrees: (degrees) => dispatch(selectDegrees(degrees)),
        changeBackground: () => dispatch(changeBackground()),
        initialRequest: () => dispatch(initialRequest()),
        searchRequest: (searchQuery) => dispatch(searchRequest(searchQuery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);