import './Web3.css';

const Web3 = () => (
  <div id="Web3 Demo" className="bg-web3">
    <div className="container mx-auto p-8">
      <h2 className="inline text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-indigo-300">
        Web3 Demo
      </h2>
      <div className="my-8 flex text-gray-900 dark:text-white">
        <div className="flex-1 pr-10">
          <h3 className="my-2 text-2xl">
            Send Ether to me
          </h3>
          <p>Of course, not sending real Ether, but sending fake Ether through the Goerli test network. You need to
            connect your ethereum wallet first, and then you will see the form to send Ether.</p>
          <button className="px-6 py-2 rounded-full text-white font-semibold bg-violet-600 hover:bg-violet-700">
            Connect Wallet
          </button>
        </div>
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
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export { Web3 };
