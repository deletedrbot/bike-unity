import { render, screen } from '@testing-library/react';
import { Footer } from '../components/Footer';

describe('Footer', () => {
  it('рендерит текст Bike Unity', () => {
    render(<Footer />);
    expect(screen.getByText(/Bike Unity/i)).toBeInTheDocument();
  });
}); 