import React, { useState } from 'react';
import TextInput from './../TextInput/TextInput';
import Select from './../Select/Select';
import Button from './../Button/Button';
import styles from './CurrencyForm.module.scss';

const CurrencyForm = ({ action }) => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('PLN');
  const [to, setTo] = useState('USD');

  const handleSubmit = e => {
    e.preventDefault();

    const numericAmount = parseInt(amount, 10);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      action({ 
        amount: numericAmount,
        from,
        to,
      });
    } else {
    
      console.error('Invalid amount value');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <span>Amount:</span>
        <TextInput 
          type="number" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          data-testid="amount"
        />
      </label>
      <label>
        <span>From</span>
        <Select onChange={e => setFrom(e.target.value)} data-testid="from-select">
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </Select>
      </label>
      <label>
        <span>To</span>
        <Select onChange={e => setTo(e.target.value)} data-testid="to-select">
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </Select>
      </label>
      <Button type="submit" data-testid="convert-button">Convert</Button> {/* Dodano type="submit" i data-testid */}
    </form>
  );
};

export default CurrencyForm;
