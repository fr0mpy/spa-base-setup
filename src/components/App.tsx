import { Provider } from 'react-redux'
import { store } from '../redux'

function App() {
    return (
        <Provider store={store}>
            <p> hello world </p>
        </Provider>
    )
}

export default App
