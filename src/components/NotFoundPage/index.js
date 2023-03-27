import './index.css'

const NotFoundPage = () => (
  <div className="not-found-page-container">
    <img
      className="not-found-page-img"
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
    />
    <h1 style={{color: '#ffffff', fontSize: '35px', fontWeight: '400'}}>
      Page Not Found
    </h1>
    <p style={{color: '#64748b', marginTop: '0px', textAlign: 'center'}}>
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFoundPage
