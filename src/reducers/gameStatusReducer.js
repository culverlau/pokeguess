const gameStatusReducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, score: 0, playing: true };
    case 'final':
      return { ...state, currentRound: 0, roundsCompleted: 0, playing: false };
    case 'nextRound':
      return { ...state, currentRound: state.currentRound + 1 };
    case 'completeRound':
      return { ...state, roundsCompleted: state.roundsCompleted + 1 };
    case 'score':
      return { ...state, score: state.score + 1 };
  }
};

export default gameStatusReducer