import { Chess } from '../src/chess'

test.each([
  [
    '7B/1Rp1pQKP/4p2N/r4p2/1P1k1P2/1PN2P1b/1pPP4/1q2rB2 w - - 0 1',
    {
      captured: undefined,
      color: 'w',
      flags: 0,
      from: 21,
      piece: 'q',
      to: 6,
    },
  ],

  ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', null],
])('has Checkmate %s', (fen, result) => {
  const chess = new Chess(fen)
  expect(chess.hasCheckmateInThreeMoves()).toStrictEqual(result)
})

//8/8/4pB2/2p5/2kpP3/8/1R1K4/8 w - - 0 1