import { useEffect, useMemo, useState } from 'react'
import { Table, Container, Alert, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFiles } from './filesSlice'

export default function FilesTable() {
  const dispatch = useDispatch()
  const { list, status } = useSelector((state) => state.files)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    dispatch(fetchFiles())
  }, [dispatch])

  const flatRows = useMemo(() => {
    if (!Array.isArray(list)) return []
    return list.flatMap(fileObj =>
      fileObj.lines.map(line => ({
        file: fileObj.file,
        text: line.text,
        number: line.number,
        hex: line.hex
      }))
    )
  }, [list])

  const filteredRows = useMemo(() => {
    if (!filter) return flatRows
    return flatRows.filter(row =>
      row.file.toLowerCase().includes(filter.toLowerCase())
    )
  }, [flatRows, filter])

  return (
    <Container className="mt-4">
      <Alert variant="danger" className="text-center fw-bold">
        React Test App
      </Alert>

      <Form.Control
        type="text"
        placeholder="Filtrar por nombre de archivo..."
        className="mb-3"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {status === 'loading' && (
            <tr>
              <td colSpan={4} className="text-center">
                <Spinner animation="border" size="sm" className="me-2" />
                Cargando...
              </td>
            </tr>
          )}

          {status === 'succeeded' && filteredRows.map((row, i) => (
            <tr key={i}>
              <td>{row.file}</td>
              <td>{row.text}</td>
              <td>{row.number}</td>
              <td>{row.hex}</td>
            </tr>
          ))}

          {status === 'succeeded' && filteredRows.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                No se encontraron resultados
              </td>
            </tr>
          )}

          {status === 'failed' && (
            <tr>
              <td colSpan={4} className="text-center text-danger">
                Error al obtener los datos
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
