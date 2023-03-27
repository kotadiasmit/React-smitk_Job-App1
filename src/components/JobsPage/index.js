import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Profile from '../Profile'
import EmploymentType from '../EmploymentType'
import SalaryRange from '../SalaryRange'
import JobsCard from '../JobsCard'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobsPage extends Component {
  state = {
    employmentType: [],
    minimumPackage: '',
    jobsList: [],
    jobSearchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobListApi()
  }

  getJobListApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {employmentType, minimumPackage, jobSearchInput} = this.state
    const employmentTypeString = employmentType.join(',')
    // console.log(employmentTypeString)
    const jwtToken = Cookies.get('jwt_token')
    const jobListUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeString}&minimum_package=${minimumPackage}&search=${jobSearchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(jobListUrl, options)
    const data = await response.json()

    console.log(data)
    if (response.ok) {
      const camelCaseData = data.jobs.map(each => ({
        id: each.id,
        title: each.title,
        rating: each.rating,
        packagePerAnnum: each.package_per_annum,
        location: each.location,
        jobDescription: each.job_description,
        employmentType: each.employment_type,
        companyLogoUrl: each.company_logo_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        jobsList: camelCaseData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  selectedEmploymentType = (isChecked, employmentTypeId) => {
    if (isChecked) {
      this.setState(
        prevState => ({
          employmentType: [...prevState.employmentType, employmentTypeId],
        }),
        this.getJobListApi,
      )
    } else {
      const {employmentType} = this.state
      this.setState(
        {
          employmentType: employmentType.filter(
            each => employmentTypeId !== each,
          ),
        },
        this.getJobListApi,
      )
    }
  }

  onJobSearchInputBtnClicked = () => {
    this.getJobListApi()
  }

  selectedSalaryRange = salaryRangeId => {
    this.setState({minimumPackage: salaryRangeId}, this.getJobListApi)
  }

  onJobSearchInput = event => {
    this.setState({jobSearchInput: event.target.value})
  }

  onJobSearchRetryClicked = () => {
    this.getJobListApi()
  }

  renderNoJobs = () => (
    <div className="not-jobs-found-page-container">
      <img
        className="not-found-page-img"
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
      />
      <h1 style={{color: '#ffffff', fontSize: '35px', fontWeight: '400'}}>
        No Jobs Found
      </h1>
      <p style={{color: '#64748b', marginTop: '0px', textAlign: 'center'}}>
        we could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobList = () => {
    const {jobsList} = this.state
    const listLength = jobsList.length === 0
    return (
      <>
        {listLength && this.renderNoJobs()}
        <ul className="jobs-container">
          {jobsList.map(eachJob => (
            <JobsCard jobDetails={eachJob} key={eachJob.id} />
          ))}
        </ul>
      </>
    )
  }

  renderJobListFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1 style={{color: '#ffffff', fontSize: '35px', fontWeight: '400'}}>
        Oops! Something Went Wrong
      </h1>
      <p style={{color: '#64748b', marginTop: '0px', textAlign: 'center'}}>
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry-btn"
        type="button"
        onClick={this.onJobSearchRetryClicked}
      >
        Retry
      </button>
    </>
  )

  renderLoadingView = () => (
    <div className="jobs-loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
        data-testid="loader"
      />
    </div>
  )

  returnSwitchStatement = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobList()
      case apiStatusConstants.failure:
        return this.renderJobListFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  jobSearchBar = () => {
    const {jobSearchInput} = this.state
    return (
      <>
        <input
          className="job-search-input"
          type="search"
          placeholder="Search"
          onChange={this.onJobSearchInput}
          value={jobSearchInput}
        />
        <button
          type="button"
          className="search-btn"
          onClick={this.onJobSearchInputBtnClicked}
          data-testid="searchButton"
        >
          <BsSearch color="#e6ebf1" size={18} />
        </button>
      </>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="main-jobs-page-container">
          <div className="search-bar-mobile-container">
            {this.jobSearchBar()}
          </div>
          <div className="profile-and-option-container">
            <Profile />
            <hr />
            <h1 className="employment-heading">Type of Employment</h1>
            <ul className="employment-type-container">
              {employmentTypesList.map(each => (
                <EmploymentType
                  employmentDetails={each}
                  key={each.employmentTypeId}
                  selectedEmploymentType={this.selectedEmploymentType}
                />
              ))}
            </ul>
            <hr />
            <h1 className="employment-heading">Salary Range</h1>
            <ul className="employment-type-container">
              {salaryRangesList.map(each => (
                <SalaryRange
                  salaryRangeDetails={each}
                  key={each.salaryRangeId}
                  selectedSalaryRange={this.selectedSalaryRange}
                />
              ))}
            </ul>
          </div>
          <div className="jobs-list-main-container">
            <div className="search-bar-container">{this.jobSearchBar()}</div>
            <div className="job-list-container">
              {this.returnSwitchStatement()}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default JobsPage
