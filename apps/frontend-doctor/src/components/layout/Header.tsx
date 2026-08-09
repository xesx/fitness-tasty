const DOCTOR_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCWj9hSyOed6OKa0PEOX1uNBcRgYeveNnCXVL9GsDiBas7qF-x8u_N9cxRAzi6Nrnu8jIEuf3cp-1yodDHD0VhRD58wMy6UR77dxzASIOkVsmpYeDdm3ZxiyHmRK06LUqx4gyqdMCWU00tavpn3naNw4UbNJf0DgN8Wxo5qwIvw1_KaSTntr3ej_19CmydKG-_RSXRFnWOtvgjro_dBqO0VYA5VnSso7fzG2u9-hWWTVWYA8lfZdFvh'

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-surface px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
      <div className="flex items-center gap-3 md:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container text-on-primary-container">
          <span className="material-symbols-outlined fill text-sm">medical_services</span>
        </div>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">EndoCare Pro</h1>
      </div>
      <div className="hidden md:block" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error" />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
        >
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="ml-2 h-8 w-8 overflow-hidden rounded-full bg-secondary-container border border-outline-variant">
          <img alt="Профиль врача" className="h-full w-full object-cover" src={DOCTOR_AVATAR_URL} />
        </div>
      </div>
    </header>
  )
}
