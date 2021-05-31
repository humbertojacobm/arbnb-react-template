import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import AppStyles from './AppStyles.css';
import Home from './Componentes/Home';
import Challenge01 from './Container/Challenge01';
import Calculator from './Container/Calculator/Calculator';

function App() {
  const classes = AppStyles();
  return (
    <Router>
      <Container>
        <Link component={RouterLink} to="/" className={classes.root}>
          Home
        </Link>
        <Link component={RouterLink} to="/challenge-01" className={classes.root}>Challenge 01</Link>
        <Link component={RouterLink} to="/calculator" className={classes.root}>Calculator</Link>
        <Switch>
          <Route path="/challenge-01">
            <Challenge01 />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
