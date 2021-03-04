import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/my-wallet/list/:type" component={List} />
            <Route path="/my-wallet/" component={Dashboard} />
        </Switch>
    </Layout>
);

export default AppRoutes;