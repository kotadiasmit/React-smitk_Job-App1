import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Profile extends Component {
  state = {
    profileDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProfileDetailsApi()
  }

  getProfileDetailsApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const profileDetailsUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileDetailsUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        profileDetails: {
          name: data.profile_details.name,
          profileImageUrl: data.profile_details.profile_image_url,
          shortBio: data.profile_details.short_bio,
        },
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderProfileDetails = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <>
        <div className="profile-detail-container">
          <img src={profileImageUrl} alt="profile" className="profile-img" />
          <h1 className="profile-heading">{name}</h1>
          <p className="profile-bio">{shortBio}</p>
        </div>
      </>
    )
  }

  onProfileRetryClicked = () => {
    this.getProfileDetailsApi()
  }

  renderProfileFailureView = () => (
    <button
      className="retry-btn"
      type="button"
      onClick={this.onProfileRetryClicked}
    >
      Retry
    </button>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
        data-testid="loader"
      />
    </div>
  )

  renderProfileContainer = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileDetails()
      case apiStatusConstants.failure:
        return this.renderProfileFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="profile-container">{this.renderProfileContainer()}</div>
    )
  }
}
export default Profile
