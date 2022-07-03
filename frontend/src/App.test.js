import { render, screen } from '@testing-library/react';
import App from './App';

test('Testando página inicial - Texto: "Lista de Tarefas"', () => {
  render(<App />);
  const text = screen.getByText(/lista de tarefas/i);
    expect(text).toBeInTheDocument()
});

test('Testando página inicial - Verificando input "Criar Tarefa"', () => {
  render(<App />);
  const text = screen.getByLabelText('Criar Tarefa:');
    expect(text).toBeInTheDocument()
});
