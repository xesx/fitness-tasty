import { useState } from 'react'
import { Sidebar, type SectionId } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './Dashboard'
import { Clients } from './Clients'

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard')

  return (
    <div className="flex min-h-screen bg-background text-on-background antialiased">
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <main className="flex w-full flex-1 flex-col md:ml-[280px]">
        <Header />
        {activeSection === 'dashboard' ? <Dashboard /> : <Clients />}
      </main>
    </div>
  )
}

export default App
