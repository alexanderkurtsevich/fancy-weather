import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { selectLanguage, openCloseSelect } from '../actions/settingsActions';

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
        selectLanguage:(language) => dispatch(selectLanguage(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);