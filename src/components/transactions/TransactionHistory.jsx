import PropTypes from 'prop-types';
import { TransTabel, TransThead, TransTr } from './TransactionHistoryStyled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransTabel>
      <TransThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransThead>

      <tbody>
        {transactions.map(transaction => (
          <TransTr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </TransTr>
        ))}
      </tbody>
    </TransTabel>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
