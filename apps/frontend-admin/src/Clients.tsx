import { ClientsTable } from './components/clients/ClientsTable'

export function Clients() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-gutter p-margin-mobile md:p-margin-desktop">
      <header className="mb-sm flex items-end justify-between">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Клиенты</h2>
        <button
          type="button"
          className="flex h-[44px] items-center gap-2 rounded-lg bg-primary px-6 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container hover:text-on-primary-container"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Создать клиента
        </button>
      </header>
      <ClientsTable />
    </div>
  )
}
