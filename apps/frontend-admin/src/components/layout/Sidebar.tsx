export type SectionId = 'dashboard' | 'clients'

const NAV_ITEMS: { id: SectionId | null; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Дашборд', icon: 'dashboard' },
  { id: 'clients', label: 'Клиенты', icon: 'groups' },
  { id: null, label: 'Календарь', icon: 'calendar_today' },
  { id: null, label: 'Библиотека рецептов', icon: 'menu_book' },
  { id: null, label: 'Настройки', icon: 'settings' },
]

type SidebarProps = {
  activeSection: SectionId
  onSelectSection: (section: SectionId) => void
}

export function Sidebar({ activeSection, onSelectSection }: SidebarProps) {
  return (
    <nav className="fixed left-0 top-0 z-20 hidden h-full w-[280px] shrink-0 flex-col bg-surface-container-lowest px-sm py-lg md:flex border-r border-outline-variant">
      <div className="mb-xl flex items-center gap-3 px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-container">
          <span className="material-symbols-outlined fill">fitness_center</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">
            Fitness Tasty
          </h1>
        </div>
      </div>
      <ul className="flex flex-grow flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id !== null && item.id === activeSection
          return (
            <li key={item.label}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  if (item.id !== null) {
                    onSelectSection(item.id)
                  }
                }}
                className={
                  isActive
                    ? 'flex items-center gap-sm rounded-lg bg-primary-container px-4 py-3 text-on-primary-container opacity-90 transition-opacity'
                    : 'flex items-center gap-sm rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-container'
                }
              >
                <span
                  className={isActive ? 'material-symbols-outlined fill' : 'material-symbols-outlined'}
                >
                  {item.icon}
                </span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="mt-auto border-t border-outline-variant pt-4">
        <a
          href="#"
          className="flex items-center gap-sm rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-container"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-md text-label-md">Профиль</span>
        </a>
      </div>
    </nav>
  )
}
