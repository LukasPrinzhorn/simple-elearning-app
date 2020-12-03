import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  const root = document.createElement('div')
  ReactDOM.render(<App/>, root)
  ReactDOM.unmountComponentAtNode(root)
});