
// 초기 설정
const initState = {
  num: 0,
};

// 리듀서
export default function counterReducer(state = initState, action) {
  switch (action.type) { //action의 type에 맞게 동작하는 부분
    case "INCREASE":
      return {
        ...state,
        num: state.num + 1,
      };
    case "DECREASE":
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return {
        ...state,
      };
  }
}