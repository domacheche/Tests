import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
      render(<ResultBox from='PLN' to='USD' amount={100}/>);
    });

  it('should render proper info about conversion when PLN->USD', () => {

      const testCasesPLNtoUSD = [
          { amount: '100', from: 'PLN', to: 'USD' , result:'PLN 100.00 = $28.57'},
          { amount: '20', from: 'PLN', to: 'USD' , result: 'PLN 20.00 = $5.71'},
          { amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14'},
          { amount: '345', from: 'PLN', to: 'USD', result: 'PLN 345.00 = $98.57' },
    ];

    for (const testObj of testCasesPLNtoUSD){
      render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

  const resultField = screen.getByTestId('result');
  expect(resultField).toHaveTextContent(testObj.result);
  cleanup();
    }
    });

    it('should render proper info about conversion when USD->PLN', () => {

      const testCasesUSDtoPLN = [
          { amount: '100', from: 'USD', to: 'PLN' , result:'$100.00 = PLN 350.00'},
          { amount: '20', from: 'USD', to: 'PLN' , result: '$20.00 = PLN 70.00'},
          { amount: '200', from: 'USD', to: 'PLN', result: '$200.00 = PLN 700.00'},
          { amount: '345', from: 'USD', to: 'PLN', result: '$345.00 = PLN 1,207.50'},
    ];

    for (const testObj of testCasesUSDtoPLN){
      render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

  const resultField = screen.getByTestId('result');
  expect(resultField).toHaveTextContent(testObj.result);
  cleanup();
    }
    });

    it('should render proper info about conversion when USD-> USD', () => {

      const testCasesUSDtoPLN = [
          { amount: '347', from: 'USD', to: 'USD' , result:'$347.00 = $347.00'},
          { amount: '234', from: 'USD', to: 'USD' , result: '$234.00 = $234.00'},
          { amount: '200', from: 'USD', to: 'USD', result: '$200.00 = $200.00'},
          { amount: '345', from: 'USD', to: 'USD', result: '$345.00 = $345.00'},
    ];

    for (const testObj of testCasesUSDtoPLN){
      render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

  const resultField = screen.getByTestId('result');
  expect(resultField).toHaveTextContent(testObj.result);
  cleanup();
    }
    });

    it('should render proper info about conversion when PLN-> PLN', () => {

      const testCasesUSDtoPLN = [
          { amount: '347', from: 'PLN', to: 'PLN' , result:'PLN 347.00 = PLN 347.00'},
          { amount: '234', from: 'PLN', to: 'PLN' , result: 'PLN 234.00 = PLN 234.00'},
          { amount: '200', from: 'PLN', to: 'PLN', result: 'PLN 200.00 = PLN 200.00'},
          { amount: '345', from: 'PLN', to: 'PLN', result: 'PLN 345.00 = PLN 345.00'},
    ];

    for (const testObj of testCasesUSDtoPLN){
      render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

  const resultField = screen.getByTestId('result');
  expect(resultField).toHaveTextContent(testObj.result);
  cleanup();
    }
    });

    it('should render text "Wrong value" when amount is lower then 0', () => {

      const testCasesNegative = [
          { amount: '-100', from: 'PLN', to: 'USD' , result:'Wrong value'},
          { amount: '-0.5', from: 'USD', to: 'PLN' , result: 'Wrong value'},
          { amount: '-21456', from: 'PLN', to: 'USD', result: 'Wrong value'},
          { amount: '-345', from: 'USD', to: 'PLN', result: 'Wrong value'},
    ];

    for (const testObj of testCasesNegative){
      render(<ResultBox from = {testObj.from} to={testObj.to} amount={parseFloat(testObj.amount)}/>);

  const resultField = screen.getByTestId('result');
  expect(resultField).toHaveTextContent(testObj.result);
  cleanup();
    }
    });

});