import { clients, type ClientStatusTone } from '../../data/clientsMock'

const STATUS_STYLES: Record<ClientStatusTone, { pill: string; dot: string }> = {
  error: { pill: 'bg-error-container text-on-error-container', dot: 'bg-error' },
  neutral: { pill: 'bg-surface-container-highest text-on-surface', dot: 'bg-outline' },
  tertiary: { pill: 'bg-tertiary-fixed text-on-tertiary-fixed', dot: 'bg-tertiary' },
}

export function ClientsTable() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-bright font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              <th className="p-4 pl-6 font-medium">ФИО</th>
              <th className="p-4 font-medium">Статус</th>
              <th className="p-4 font-medium">Последняя активность</th>
              <th className="p-4 font-medium">Ближайшая запись</th>
              <th className="p-4 pr-6 text-right font-medium">Действие</th>
            </tr>
          </thead>
          <tbody className="font-data-tabular text-data-tabular">
            {clients.map((client, index) => {
              const status = STATUS_STYLES[client.statusTone]
              const isLastRow = index === clients.length - 1
              return (
                <tr
                  key={client.id}
                  className={`bg-surface-container-lowest transition-all hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                    isLastRow ? '' : 'border-b border-outline-variant'
                  }`}
                >
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-surface-container">
                        <img
                          alt={client.name}
                          className="h-full w-full object-cover"
                          src={client.avatarUrl}
                        />
                      </div>
                      <p className="font-body-md text-body-md font-medium text-on-surface">
                        {client.name}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-label-md text-[12px] ${status.pill}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {client.statusLabel}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant">{client.lastActivity}</td>
                  <td className="p-4 text-on-surface-variant">
                    {client.nextAppointment ?? (
                      <span className="text-outline-variant">Не запланирована</span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button
                      type="button"
                      className="h-9 rounded-lg border border-primary px-4 font-label-md text-primary transition-colors hover:bg-surface-container"
                    >
                      Открыть карточку
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
