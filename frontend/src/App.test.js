import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

/* test('Testando página inicial - Verificando evento de criar tarefa', async () => {
  render(<App />);
  const botaoCriar = await screen.findByText(/criar/i);
  userEvent.click(botaoCriar);
  const inputEditar = await screen.findAllByText(/editar/i);
  expect(inputEditar[0]).toBeInTheDocument()
}); */

test('Testando página inicial - Verificando evento de deletar tarefa', async () => {
  render(<App />);
  const botaoCriar = await screen.findByRole('button', { name: 'Criar' });
  userEvent.click(botaoCriar);

  const inputDeletar = await screen.findByRole('button', { name: 'Deletar' });
  userEvent.click(inputDeletar);

  const inputEditarDeletado = await screen.findAllByText(/editar/i);
  expect(inputEditarDeletado[0]).not.toBeInTheDocument()
});