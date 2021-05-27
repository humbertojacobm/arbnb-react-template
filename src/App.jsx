import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Home from './Componentes/Home';
import Challenge01 from './Container/Challenge01';
import './App.css';

const useStyles = makeStyles({
  root: {
    marginLeft: '30px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Container>
        <Link component={RouterLink} to="/" className={classes.root}>
          Home
        </Link>
        <Link component={RouterLink} to="/challenge-01" className={classes.root}>Challenge 01</Link>
        <Switch>
          <Route path="/challenge-01">
            <Challenge01 />
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
