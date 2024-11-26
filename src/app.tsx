import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';
import { Provider } from './components/ui/provider';

export const App = () => {
  return (
    <Provider>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </Provider>
  );
};
