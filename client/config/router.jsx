import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';
import TestApi from '../views/test/api-test'

export default () => [
  <Route path="/" key="index" render={() => <Redirect to="/list" />} exact />,
  <Route path="/list" key="list" component={TopicList} />,
  <Route path="/detail" key="detail" component={TopicDetail} />,
  <Route path="/test" component={TestApi} exact key="test" />,
]
