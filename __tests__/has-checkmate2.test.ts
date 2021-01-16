import { Chess } from '../src/chess'

test.each([
  [
    'kb6/p5K1/2RP4/8/4R1p1/r7/bQ3B2/r1n4B w - - 0 1',
    {
      captured: undefined,
      color: 'w',
      flags: 0,
      from: 34,
      piece: 'r',
      to: 33,
    },
  ],

  ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', null],
])('has Checkmate %s', (fen, result) => {
  const chess = new Chess(fen)
  expect(chess.hasCheckmateInTwoMoves()).toStrictEqual(result)
})
//7B/1Rp1pQKP/4p2N/r4p2/1P1k1P2/1PN2P1b/1pPP4/1q2rB2 w - - 0 1
