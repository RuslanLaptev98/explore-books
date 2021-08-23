import ExploreBooks from './pages/ExploreBooks/ExploreBooks'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ExploreBooks />
            </div>
        </Provider>
    )
}

export default App
