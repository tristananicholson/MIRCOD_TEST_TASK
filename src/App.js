import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/scss/_colors.scss';
import Layout from './hoc/Layout/Layout';
import ChipConstructor from './containers/ChipConstructor/ChipConstructor';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={ChipConstructor} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
