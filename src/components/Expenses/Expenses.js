import React , {useState} from 'react';

import ExpenseFilter from './ExpenseFilter';

import Card from '../UI/Card';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const expensesByDate = props.items.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear;
})

if (expensesByDate.length > 0) {
  
}

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
      <ExpenseChart expenses={expensesByDate} />
      <ExpensesList items = {expensesByDate} />
    </Card>
  );
}

export default Expenses;