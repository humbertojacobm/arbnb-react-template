import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const calculatorStyles = makeStyles({
  body: {
    backgroundColor: purple[900],
    color: '#FFFFFF',
  },
  title: {
  },
  NumberContainer: {
    backgroundColor: purple[100],
  },
  Button: {
    backgroundColor: '#8833FF',
  },
  CommonMarginBotton: {
    marginBottom: '30px',
  },
});

export default calculatorStyles;
