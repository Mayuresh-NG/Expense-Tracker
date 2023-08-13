import './expenseitem.css'

function ExpenseItem(props) {
   
    return (
        <div className='expense-item'>
        <div>{props.x.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.x.title}</h2>
            <div className='expense-item__price'>Rs {props.x.amount}</div>
        </div>
        </div>
    )
}

export default ExpenseItem;