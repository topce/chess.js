import { Chess } from '../src/chess'

test.each([
  [
    'rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq - 0 2',
    {
      captured: undefined,
      color: 'b',
      flags: 0,
      from: 3,
      piece: 'q',
      to: 71,
    },
  ],
  [
    'r1b1kbnr/pppp1Npp/8/8/3nq3/8/PPPPBP1P/RNBQKR2 b Qkq - 1 7',
    {
      captured: undefined,
      color: 'b',
      flags: 0,
      from: 67,
      piece: 'n',
      to: 85,
    },
  ],
  ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', null],
])('has Checkmate %s', (fen, result) => {
  const chess = new Chess(fen)
  expect(chess.hasCheckmate()).toStrictEqual(result)
})
