import React, { useContext } from 'react';
import { TransactionContext } from '../context/DemoContext'
import './Web3.css';

const Web3 = () => {
  const {
    connectWallet,
    currentAccount,
    amount,
    setAmount,
    sendTransaction,
    isLoading,
    transactions,
  } = useContext(TransactionContext);

  const handleSubmit = e => {
    if (!amount) return;
    sendTransaction();
  };

  const sendEther = (
    <div className="flex-1 pr-10">
      <h3 className="my-2 text-2xl">
        Send Ether to me
      </h3>
      <p>Of course, not sending real Ether, but sending fake Ether through the Goerli test network. You need to
        connect your ethereum wallet first, and then you will see the form to send Ether.</p>
      <button
        onClick={connectWallet}
        className="px-6 py-2 rounded-full text-white font-semibold web3-button"
      >
        Connect Wallet
      </button>
    </div>
  );

  const sendEther2 = (
    <div className="flex-1 pr-10">
      <h3 className="my-2 text-2xl">
        Send Ether to me
      </h3>
      <p>Of course, not sending real Ether, but sending fake Ether through the Goerli test network. Please fill in
        the amount first, then click the Send button to send.</p>
      <p>
        Amount:
        <input
          type="number"
          name="amount"
          step="0.0001"
          className="px-2 bg-transparent outline-none border-b border-neutral-700 dark:border-neutral-200"
          onChange={e => setAmount(e.target.value)}
        />
      </p>
      {!isLoading ? (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-full text-white font-semibold web3-button"
        >
          Send
        </button>
      ) : (
        <button
          className="px-6 py-2 rounded-full text-white font-semibold bg-violet-500"
        >
          <svg
            className="inline-block animate-spin mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3
              7.938l3-2.647z"
            />
          </svg>
          Sending...
        </button>
      )}
    </div>
  );

  const shortenAddress = address => (
    `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
  )

  const transactionList = transactions.map((transaction, index) => (
    <tr key={index}>
      <td>
        <a href={`https://goerli.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noreferrer">
          {shortenAddress(transaction.addressFrom)}
        </a>
      </td>
      <td>{transaction.amount}</td>
      <td>{transaction.timestamp}</td>
    </tr>
  ))

  return (
    <div id="Web3 Demo" className="bg-web3">
      <div className="container mx-auto p-8">
        <h2 className="inline text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-indigo-300">
          Web3 Demo
        </h2>
        <div className="my-8 flex text-gray-900 dark:text-white">
          {!currentAccount ? sendEther : sendEther2}
          <div className="flex-1">
            <h3 className="my-2 text-2xl">
              Transaction history
            </h3>
            <table className="web3-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Web3 };
