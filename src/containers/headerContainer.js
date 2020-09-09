import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { selectLanguage, openCloseSelect, selectDegrees, changeBG, searchRequest } from '../actions/settingsActions';
import { requestData } from '../actions/locationActions';

const mapStateToProps = state => {
    return {
        language: state.settings.language,
        degrees: state.settings.degrees,
        isSelectOpened: state.settings.isSelectOpened,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCloseSelect: () => dispatch(openCloseSelect()),
        selectLanguage: (language) => dispatch(selectLanguage(language)),
        selectDegrees: (degrees) => dispatch(selectDegrees(degrees)),
        changeBG: () => dispatch(changeBG()),
        requestData: () => dispatch(requestData()),
        searchRequest: (searchQuery) => dispatch(searchRequest(searchQuery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);