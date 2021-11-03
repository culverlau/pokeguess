const countdownReducer = (state, action) => {
  const timePerRound = 5;
  switch (action.type) {
    case 'start':
      return { isActive: true, time: timePerRound };
    case 'stop':
      return { ...state, isActive: false };
    case 'subtract':
      return { ...state, time: state.time - 1 };
  }
};

export default countdownReducer