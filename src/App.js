import { Provider } from 'react-redux';
import store from './store';
import FetcherUsers from './components/fetchedUsers'

function App() {
  return (
    <Provider store={store}>
     <FetcherUsers />
    </Provider>
  );
}

export default App;