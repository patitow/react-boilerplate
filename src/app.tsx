import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ExamplePage } from './pages/examplePage'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<ExamplePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
