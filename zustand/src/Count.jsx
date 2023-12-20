import { create } from 'zustand' // create로 zustand를 불러옵니다.
const useCount = create(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count - 1 }))
}))
export default useCount