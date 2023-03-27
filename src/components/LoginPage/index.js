import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
  state = {username: '', password: '', errorMsg: '', showSubmitError: false}

  inputUsernameChanged = event => {
    this.setState({username: event.target.value})
  }

  inputPasswordChanged = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  loginBtnClicked = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-login-container">
        <div className="login-container">
          <img
            alt="website logo"
            className="login-web-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form
            className="login-form-container"
            onSubmit={this.loginBtnClicked}
          >
            <div className="login-details-container">
              <label htmlFor="username" className="login-label">
                USERNAME
              </label>
              <input
                className="login-input"
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.inputUsernameChanged}
              />
            </div>
            <div className="login-details-container">
              <label htmlFor="password" className="login-label">
                PASSWORD
              </label>
              <input
                className="login-input"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.inputPasswordChanged}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          {showSubmitError ? (
            <p className="login-err-msg">
              <sup>*</sup>
              {errorMsg}
            </p>
          ) : null}
        </div>
      </div>
    )
  }
}
export default LoginPage
