import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../Contact';
import { describe, it, expect } from 'vitest';

describe('Contact Page', () => {
  const renderContact = () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
  };

  it('renders contact form with all fields', () => {
    renderContact();
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('handles form submission', () => {
    renderContact();
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });
    
    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(subjectInput.value).toBe('Test Subject');
    expect(messageInput.value).toBe('Test Message');
  });

  it('validates required fields', () => {
    renderContact();
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/subject/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });
}); 