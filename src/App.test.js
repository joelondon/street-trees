import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/There are 880,021 trees in this dataset/i)
  expect(linkElement).toBeInTheDocument()
})
