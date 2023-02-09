import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import * as H from 'history';
import React from 'react';

interface aaaaaa extends BrowserRouterProps {
  history?: H.BrowserHistory;
}

export class BrowserRouterWrapper extends React.Component<
  BrowserRouter,
  aaaaaa
> {}
