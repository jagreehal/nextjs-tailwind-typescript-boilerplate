import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import Header from './index'

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to Next.js!')
  })
})