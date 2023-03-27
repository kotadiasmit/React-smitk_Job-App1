import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import JobsPage from './components/JobsPage'
import JobDetailPage from './components/JobDetailPage'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/jobs" component={JobsPage} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailPage} />
      <Route exact path="/not-found" component={NotFoundPage} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
