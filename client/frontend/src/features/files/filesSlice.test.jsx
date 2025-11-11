import reducer, { setFiles, clearFiles } from './filesSlice'

describe('filesSlice', () => {
  const initialState = {
    list: [],
    status: 'idle',
    error: null,
  }

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('should handle setFiles', () => {
    const mockFiles = [{ file: 'test.csv', lines: [] }]
    const newState = reducer(initialState, setFiles(mockFiles))
    expect(newState.list).toEqual(mockFiles)
  })

  test('should handle clearFiles', () => {
    const mockState = { ...initialState, list: [{ file: 'x.csv' }] }
    const newState = reducer(mockState, clearFiles())
    expect(newState.list).toEqual([])
  })
})
