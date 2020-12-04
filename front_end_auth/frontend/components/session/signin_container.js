import { connect } from 'react-redux';
import SignIn from './signin';
import { login } from '../../actions/session'

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
})

export default connect(null,  mapDispatchToProps)(SignIn);