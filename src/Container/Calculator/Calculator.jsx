import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import calculatorStyles from './Calculator.css';

const Calculator = () => {
  const classNames = calculatorStyles();
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sumResult, setSumResult] = useState(0);
  const [firstNumberShowError, setFirstNumberShowError] = useState(false);
  const [secondNumberShowError, setSecondNumberShowError] = useState(false);
  const [thereAreErrors, setThereAreErrors] = useState(false);
  const changeFirstNumber = (event) => {
    if (event.target.value) {
      setFirstNumberShowError(false);
    } else {
      setFirstNumberShowError(true);
    }
    setFirstNumber(event.target.value);
  };
  const changeSecondNumber = (event) => {
    if (event.target.value) {
      setSecondNumberShowError(false);
    } else {
      setSecondNumberShowError(true);
    }
    setSecondNumber(event.target.value);
  };
  useEffect(() => {
    setThereAreErrors(false);
    if (firstNumberShowError || secondNumberShowError) {
      setThereAreErrors(true);
    }
    setSumResult(+firstNumber + (+secondNumber));
  }, [firstNumber, secondNumber]);
  const sum = () => {
    setSumResult(+firstNumber + (+secondNumber));
  };
  return (
    <>
      <Box className={classNames.body}>
        <Box fontWeight="fontWeightBold" textAlign="center" className={clsx([classNames.title, classNames.CommonMarginBotton])}>
          Adding Two Numbers
        </Box>
        <Box>
          <Grid container spacing={2} className={clsx([classNames.CommonMarginBotton])}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                <Grid item xs={4}>
                  <Box className={classNames.NumberContainer}>
                    <TextField size="medium" value={firstNumber} onChange={changeFirstNumber} error={firstNumberShowError} />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classNames.NumberContainer}>
                    <TextField size="medium" value={secondNumber} onChange={changeSecondNumber} error={secondNumberShowError} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center" className={clsx([classNames.CommonMarginBotton])}>
          <Button variant="contained" color="primary" className={clsx([classNames.Button])} onClick={sum} disabled={thereAreErrors}>
            Add Them!
          </Button>
        </Box>
        <Box textAlign="center" className={clsx([classNames.CommonMarginBotton])} fontSize={28}>
          {sumResult}
        </Box>
        <Box>
          <hr />
        </Box>
        <Box />
      </Box>
    </>
  );
};

export default Calculator;
