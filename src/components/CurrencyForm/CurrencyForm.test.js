import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrencyForm from './CurrencyForm';

describe('Component CurrencyForm', () => {
  it('renders without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });

  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
  ];

  for (const { amount, from, to } of testCases) {
    it(`should run action callback with proper data on form submit: ${amount} ${from} -> ${to}`, async () => {
      const action = jest.fn();

      render(<CurrencyForm action={action} />);

      const amountField = screen.getByTestId('amount');
      const fromField = screen.getByTestId('from-select');
      const toField = screen.getByTestId('to-select');
      const submitButton = screen.getByText('Convert');

      await userEvent.type(amountField, amount);
      await userEvent.selectOptions(fromField, from);
      await userEvent.selectOptions(toField, to);
      userEvent.click(submitButton);

      expect(action).toHaveBeenCalledTimes(1);
      expect(action).toHaveBeenCalledWith({ amount: parseFloat(amount), from, to });

      cleanup();
    });
  }
});
