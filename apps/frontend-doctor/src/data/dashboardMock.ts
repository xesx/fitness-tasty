export type PatientStatusTone = 'error' | 'neutral' | 'tertiary'

export interface PriorityPatient {
  id: string
  name: string
  diagnosis: string
  avatarUrl: string
  statusLabel: string
  statusTone: PatientStatusTone
  lastVisit: string
  trend: number[] | null
  trendDangerFromIndex?: number
}

export interface Appointment {
  id: string
  time: string
  duration: string
  patientName: string
  reason: string
  emphasized: boolean
}

export const priorityPatients: PriorityPatient[] = [
  {
    id: 'ivanov',
    name: 'Иванов А. П.',
    diagnosis: 'СД 2 типа',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0rapt4CXcIUlDtka-2cIhW72-sg78uYfnBAqVekjTApJf_wwE4logy8a6w7LHTpTD3z9IM4V2QLdAhDO1GmZmCOQ6PAW_8KJZQ5TNpEe37Y76XvQaWtRR2ww1YX_B8xMIjKI93tta8OaiWzwfqrtLm3ST4XZ0kgIgJerkLrhlOvCKXZaTrT5wePBcBLw8VK9HUAC9jRqxCJP0FrjJROTiJI_UUU2L8dBQRcWHWYNLD2bbPrIraW3Z',
    statusLabel: 'Высокий сахар',
    statusTone: 'error',
    lastVisit: 'Сегодня, 08:30',
    trend: [40, 50, 45, 70, 85, 90],
    trendDangerFromIndex: 3,
  },
  {
    id: 'smirnova',
    name: 'Смирнова Е. В.',
    diagnosis: 'Ожирение II ст.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSn8thA1hN8NzDVUoQn-2bmNvwEUQuBaUrkEnohP2XXDt0IE5P4UPWIjH3JD7FKnVWcddRqbTiphNwl-38z25lOkzx72IYr6gN84xXT35Fq11mPJCmGd2b2ZK7eAz6fmMrCZPYPLftHlfXdEPBNewu3boTXEBZaAg7wpOfk2EQR1Z8lu23oA5munxgeMjto1LPFw8xJ_S17F2l0BtXSjxbZh46ptX8oJ66kfG0VQrz5gsv6xOgAsk4',
    statusLabel: 'Пропуск дневника (3 дн)',
    statusTone: 'neutral',
    lastVisit: '21 Октября',
    trend: [60, 60, 59],
  },
  {
    id: 'petrov',
    name: 'Петров Д. С.',
    diagnosis: 'СД 1 типа',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdT0K5yspqA-XGyAixvCe2CTAgkwNo16WuP2amhpcbYA3rY_fdDEiNvOtLVSy5496oyCaiVNtbUUut4stDo0_vQ1B8evxQ_jULTQ7rcTUEiGCIlpW19IWDg9P2dhup9n1RUFjsKEsLFLFGLAvcOmxveFKp7vgnNHdFRVsKRpNUn2Lml-6dk59YDdJbtI-HOi3Fd2h3zfyiR5cAE4eEnvOw3dRWatU6lxlCVezm-ycS9PI4iiLEvlnW',
    statusLabel: 'Новые анализы',
    statusTone: 'tertiary',
    lastVisit: 'Вчера, 16:45',
    trend: null,
  },
]

export const upcomingAppointments: Appointment[] = [
  {
    id: 'sidorova',
    time: '14:00',
    duration: '30 мин',
    patientName: 'Сидорова М.И.',
    reason: 'Первичный осмотр',
    emphasized: true,
  },
  {
    id: 'kuznecov',
    time: '15:30',
    duration: '15 мин',
    patientName: 'Кузнецов А.В.',
    reason: 'Разбор анализов',
    emphasized: false,
  },
]
