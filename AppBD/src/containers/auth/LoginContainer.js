import { connect } from "react-redux";
import { LoginView } from "./LoginView";
import { login } from "../../redux/auth/action";

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//     }
// }
export default connect(mapStateToProps)(LoginView);