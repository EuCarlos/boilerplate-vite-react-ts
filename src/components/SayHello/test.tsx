import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SayHello } from '.'

it('should render Heading with text Hello YouTube', () => {
  render(<SayHello>Hello Test!</SayHello>);
  const heading = screen.getByRole('heading', { name: /Hello Test/ });
  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
