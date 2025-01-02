import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router';

import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';
import { Provider } from './components/ui/provider';

export const App = () => {
  return (
    <HelmetProvider>
      <Provider>
        <Router>
          <Layout>
            <Routings />
          </Layout>
        </Router>
      </Provider>
    </HelmetProvider>
  );
};
