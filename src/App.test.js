import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

afterEach(rtl.cleanup);
test("render app", () => {
    const wrapper = rtl.render(
        <Router><App/></Router>
    )
    wrapper.debug()
})

test('Cart', async () => {
  const wrapper = rtl.render( <Router>
    <App />
  </Router>);
  expect(await wrapper.queryAllByText(/cart/i));
});

test('Product', async () => {
  const wrapper = rtl.render( <Router>
    <App />
  </Router>);
  expect(await wrapper.queryAllByText(/product/i));
});