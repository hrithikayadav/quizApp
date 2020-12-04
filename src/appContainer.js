import { connect } from 'react-redux';
import AppComponent from "./App"

const mapStateToProps = state => {
    return {
        selectedOptions: state.selectedOptions
    }
}
export default connect(mapStateToProps)(AppComponent)