import { MetricsGrid } from './components/dashboard/MetricsGrid'
import { PriorityPatientsTable } from './components/dashboard/PriorityPatientsTable'
import { AppointmentsPanel } from './components/dashboard/AppointmentsPanel'

export function Dashboard() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-gutter p-margin-mobile md:p-margin-desktop">
      <header className="mb-sm flex items-end justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Сводка на сегодня</h2>
          <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
            Четверг, 24 Октября 2023
          </p>
        </div>
        <button
          type="button"
          className="hidden h-[44px] items-center gap-2 rounded-lg bg-primary px-6 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container hover:text-on-primary-container sm:flex"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Новая запись
        </button>
      </header>
      <MetricsGrid />
      <div className="mt-sm flex flex-col gap-gutter lg:flex-row">
        <PriorityPatientsTable />
        <AppointmentsPanel />
      </div>
    </div>
  )
}
