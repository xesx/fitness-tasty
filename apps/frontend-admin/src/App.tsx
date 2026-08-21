import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './Dashboard'

function App() {
  return (
    <div className="flex min-h-screen bg-background text-on-background antialiased">
      <Sidebar />
      <main className="flex w-full flex-1 flex-col md:ml-[280px]">
        <Header />
        <Dashboard />
      </main>
    </div>
  )
}

export default App
