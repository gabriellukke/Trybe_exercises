import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const {getByTestId} = render(<TicTacToe />);

    for (let i = 0; i <= 8; i++) {
      expect(getByTestId(`cell_${i}`)).toBeDefined();
    }
  });

  test('Começar com todos os espaços em branco.', () => {
    const {queryByAltText} = render(<TicTacToe />);
    expect(queryByAltText('X')).toBeNull();
    expect(queryByAltText('O')).toBeNull();
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const {queryByText} = render(<TicTacToe />);

    expect(queryByText('Fim de Jogo')).toBeNull();
  });
});
