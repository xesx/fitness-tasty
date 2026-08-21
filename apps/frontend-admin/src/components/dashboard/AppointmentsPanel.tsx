import { upcomingAppointments } from '../../data/dashboardMock'

export function AppointmentsPanel() {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-sm lg:w-[320px]">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md text-on-surface">Ближайшие приемы</h3>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[20px]">more_vert</span>
          </button>
        </div>
        <div className="mb-4 flex items-center justify-between font-label-md text-on-surface">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">
            chevron_left
          </span>
          <span>Октябрь 2023</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">
            chevron_right
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`flex items-stretch gap-3 border-l-2 py-1 pl-3 ${
                appointment.emphasized ? 'border-primary' : 'border-outline-variant opacity-70'
              }`}
            >
              <div className="flex w-12 shrink-0 flex-col text-center">
                <span className="font-label-md text-label-md text-on-surface">
                  {appointment.time}
                </span>
                <span className="text-[11px] text-on-surface-variant">{appointment.duration}</span>
              </div>
              <div className="flex-1 rounded-lg bg-surface-container p-3">
                <p className="font-body-md text-body-md font-medium leading-tight text-on-surface">
                  {appointment.patientName}
                </p>
                <p className="mt-1 font-body-sm text-[12px] text-on-surface-variant">
                  {appointment.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-4 h-10 w-full rounded-lg border border-outline-variant font-label-md text-on-surface-variant transition-colors hover:bg-surface-container"
        >
          Открыть календарь
        </button>
      </div>
    </aside>
  )
}
