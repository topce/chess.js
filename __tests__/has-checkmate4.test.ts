import { Chess } from '../src/chess'

test.each([
  [
    '8/8/4pB2/2p5/2kpP3/8/1R1K4/8 w - - 0 1',
    {
      captured: undefined,
      color: 'w',
      flags: 0,
      from: 37,
      piece: 'b',
      to: 20,
    },
  ],

  ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', null],
])('has Checkmate %s', (fen, result) => {
  const chess = new Chess(fen)
  expect(chess.hasCheckmateInFourMoves()).toStrictEqual(result)
})

