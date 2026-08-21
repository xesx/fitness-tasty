import { priorityPatients, type PatientStatusTone } from '../../data/dashboardMock'
import { Sparkline } from './Sparkline'

const STATUS_STYLES: Record<PatientStatusTone, { pill: string; dot: string }> = {
  error: { pill: 'bg-error-container text-on-error-container', dot: 'bg-error' },
  neutral: { pill: 'bg-surface-container-highest text-on-surface', dot: 'bg-outline' },
  tertiary: { pill: 'bg-tertiary-fixed text-on-tertiary-fixed', dot: 'bg-tertiary' },
}

export function PriorityPatientsTable() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-bright p-6">
        <h3 className="flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
          <span className="material-symbols-outlined text-primary">priority_high</span>
          Приоритетный список пациентов
        </h3>
        <button
          type="button"
          className="font-label-md text-label-md text-primary hover:text-primary-container"
        >
          Смотреть всех
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-bright font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              <th className="p-4 pl-6 font-medium">Пациент</th>
              <th className="p-4 font-medium">Статус</th>
              <th className="p-4 font-medium">Последняя запись</th>
              <th className="p-4 font-medium">Динамика</th>
              <th className="p-4 pr-6 text-right font-medium">Действие</th>
            </tr>
          </thead>
          <tbody className="font-data-tabular text-data-tabular">
            {priorityPatients.map((patient, index) => {
              const status = STATUS_STYLES[patient.statusTone]
              const isLastRow = index === priorityPatients.length - 1
              return (
                <tr
                  key={patient.id}
                  className={`bg-surface-container-lowest transition-all hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                    isLastRow ? '' : 'border-b border-outline-variant'
                  }`}
                >
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-surface-container">
                        <img
                          alt={patient.name}
                          className="h-full w-full object-cover"
                          src={patient.avatarUrl}
                        />
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-medium text-on-surface">
                          {patient.name}
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {patient.diagnosis}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-label-md text-[12px] ${status.pill}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {patient.statusLabel}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant">{patient.lastVisit}</td>
                  <td className="p-4">
                    {patient.trend ? (
                      <Sparkline
                        values={patient.trend}
                        dangerFromIndex={patient.trendDangerFromIndex}
                      />
                    ) : (
                      <div className="flex h-8 w-24 items-center justify-center rounded bg-surface-container text-[10px] text-outline-variant">
                        Нет данных
                      </div>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button
                      type="button"
                      className="h-9 rounded-lg border border-primary px-4 font-label-md text-primary transition-colors hover:bg-surface-container"
                    >
                      Открыть карту
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
