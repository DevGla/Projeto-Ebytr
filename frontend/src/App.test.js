import { render, screen } from '@testing-library/react';
import App from './App';

test('Testando página inicial - Texto: "Lista de Tarefas"', () => {
  render(<App />);
  const text = screen.getByText(/lista de tarefas/i);
    expect(text).toBeInTheDocument()
});

test('Testando página inicial - Verificando input "Tarefa"', () => {
  render(<App />);
  const text = screen.getByText('Tarefa:');
    expect(text).toBeInTheDocument()
});

test('Testando página inicial - Verificando input "status"', () => {
  render(<App />);
  const text = screen.getByText('Status:');
    expect(text).toBeInTheDocument()
});