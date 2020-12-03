import { cleanup, render, waitFor, fireEvent, getByTestId, getByText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils';
import Home from '../Home'

afterEach(cleanup);
it('Home renders without crashing', () => {
    const root = document.createElement('div')
    ReactDOM.render(<Home />, root)
})


it('Home shows components correctly', async () => {
    const root = document.createElement('div')
    ReactDOM.render(<Home />, root)

    expect(root.querySelector('h1')?.textContent).toBe('Simple Quiz')
    expect(root.querySelector('#startButton')?.textContent).toBe('Start Quiz')
    expect(root.querySelector('#checkButton')?.textContent).toBeUndefined
    expect(root.querySelector('#endButton')?.textContent).toBeUndefined


    const leftClick = { button: 1 }
    const startButton = getByText(root, 'Start Quiz')
    act(() => {
        fireEvent.click(startButton, leftClick)
    });

    await waitFor(() => root.querySelector('#checkButton'))
    expect(root.querySelector('#startButton')?.textContent).toBeUndefined
    expect(root.querySelector('#checkButton')?.textContent).toBe('Check Answer')
    expect(root.querySelector('#endButton')?.textContent).toBe('End Quiz')
})