import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import FilesTable from './FilesTable'

describe('FilesTable component', () => {
  test('renders table headers correctly', () => {
    render(
      <Provider store={store}>
        <FilesTable />
      </Provider>
    )

    // Verifica los encabezados reales de la tabla
    expect(screen.getByText(/File Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
    expect(screen.getByText(/Number/i)).toBeInTheDocument()
    expect(screen.getByText(/Hex/i)).toBeInTheDocument()
  })
  test('shows loading message initially', () => {
  render(
    <Provider store={store}>
      <FilesTable />
    </Provider>
  )

  expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
})

})
