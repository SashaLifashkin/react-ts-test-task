import { TransactionList } from './components/TransactionsList'
import dataFromServer from './data/TransactionData.json';
import 'bulma/css/bulma.css';
import './icon/css/all.css';
import './App.css';

const maxCreditLimit = 1500;

function App() {
    return (
        <div className="App">
            <TransactionList
                transactions={dataFromServer}
                creditLimit={maxCreditLimit}
            />
        </div>
    );
}

export default App;
