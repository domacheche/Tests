import React from 'react';
import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
    const output = screen.getByTestId('result');
    expect(output).toHaveTextContent('PLN 100.00 = $28.57');
  });

  const testCases = [
    { amount: 50, expected: 'PLN 50.00 = $14.29' },
    { amount: 150, expected: 'PLN 150.00 = $42.86' }
  ];

  testCases.forEach(({ amount, expected }) => {
    it(`should render proper info for amount ${amount}`, () => {
      render(<ResultBox from="PLN" to="USD" amount={amount} />);
      const output = screen.getByTestId('result');
      expect(output).toHaveTextContent(expected);
    });
  });

  it('should render proper info about conversion when USD -> PLN', () => {
    render(<ResultBox from="USD" to="PLN" amount={100} />);
    const output = screen.getByTestId('result');
    expect(output).toHaveTextContent('$100.00 = PLN 350.00');
  });

  it('should render the same amount for the same from and to currency', () => {
    render(<ResultBox from="PLN" to="PLN" amount={123} />);
    const output = screen.getByTestId('result');
    expect(output).toHaveTextContent('PLN 123.00 = PLN 123.00');
  });

  it('should display "Wrong value…" for negative amount', () => {
    render(<ResultBox from="PLN" to="USD" amount={-100} />);
    const errorMessage = screen.getByText(/wrong value…/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
