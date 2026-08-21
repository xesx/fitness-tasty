export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
      <div className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container text-primary">
            <span className="material-symbols-outlined fill">groups</span>
          </div>
          <span className="flex items-center gap-1 rounded-md bg-surface-container-highest px-2 py-1 font-label-md text-[12px] text-on-surface">
            <span className="material-symbols-outlined text-[14px] text-surface-tint">
              trending_up
            </span>
            +4 за неделю
          </span>
        </div>
        <div>
          <p className="mb-1 font-body-sm text-body-sm text-on-surface-variant">Всего пациентов</p>
          <h3 className="font-display-lg text-display-lg text-on-surface">124</h3>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="absolute right-0 top-0 -z-0 h-24 w-24 rounded-bl-full bg-error-container opacity-50" />
        <div className="relative z-10 mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-container text-error">
            <span className="material-symbols-outlined fill">warning</span>
          </div>
        </div>
        <div className="relative z-10">
          <p className="mb-1 font-body-sm text-body-sm text-on-surface-variant">Требуют внимания</p>
          <div className="flex items-baseline gap-2">
            <h3 className="font-display-lg text-display-lg text-on-surface">15</h3>
            <span className="font-body-sm text-body-sm text-error">отклонения</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
            <span className="material-symbols-outlined fill">biotech</span>
          </div>
          <span className="h-3 w-3 animate-pulse rounded-full bg-error" />
        </div>
        <div>
          <p className="mb-1 font-body-sm text-body-sm text-on-surface-variant">Новые анализы</p>
          <div className="flex items-baseline gap-2">
            <h3 className="font-display-lg text-display-lg text-on-surface">3</h3>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              ожидают проверки
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
