
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const saveExepenseData = (exepenseData) => {
        
        const newExpenseData = {
            ...exepenseData,
            id : Math.random().toString()
        }

        props.onAddExpenseData(newExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExepenseData} />
        </div>
    );
}

export default NewExpense;