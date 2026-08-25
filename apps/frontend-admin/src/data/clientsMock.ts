export type ClientStatusTone = 'tertiary' | 'neutral' | 'error'

export interface Client {
  id: string
  name: string
  avatarUrl: string
  statusLabel: string
  statusTone: ClientStatusTone
  lastActivity: string
  nextAppointment: string | null
}

export const clients: Client[] = [
  {
    id: 'ivanov',
    name: 'Иванов А. П.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0rapt4CXcIUlDtka-2cIhW72-sg78uYfnBAqVekjTApJf_wwE4logy8a6w7LHTpTD3z9IM4V2QLdAhDO1GmZmCOQ6PAW_8KJZQ5TNpEe37Y76XvQaWtRR2ww1YX_B8xMIjKI93tta8OaiWzwfqrtLm3ST4XZ0kgIgJerkLrhlOvCKXZaTrT5wePBcBLw8VK9HUAC9jRqxCJP0FrjJROTiJI_UUU2L8dBQRcWHWYNLD2bbPrIraW3Z',
    statusLabel: 'Активен',
    statusTone: 'tertiary',
    lastActivity: 'Сегодня, 08:30',
    nextAppointment: '28 Октября, 10:00',
  },
  {
    id: 'smirnova',
    name: 'Смирнова Е. В.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSn8thA1hN8NzDVUoQn-2bmNvwEUQuBaUrkEnohP2XXDt0IE5P4UPWIjH3JD7FKnVWcddRqbTiphNwl-38z25lOkzx72IYr6gN84xXT35Fq11mPJCmGd2b2ZK7eAz6fmMrCZPYPLftHlfXdEPBNewu3boTXEBZaAg7wpOfk2EQR1Z8lu23oA5munxgeMjto1LPFw8xJ_S17F2l0BtXSjxbZh46ptX8oJ66kfG0VQrz5gsv6xOgAsk4',
    statusLabel: 'Пропуск дневника',
    statusTone: 'neutral',
    lastActivity: '21 Октября',
    nextAppointment: null,
  },
  {
    id: 'petrov',
    name: 'Петров Д. С.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdT0K5yspqA-XGyAixvCe2CTAgkwNo16WuP2amhpcbYA3rY_fdDEiNvOtLVSy5496oyCaiVNtbUUut4stDo0_vQ1B8evxQ_jULTQ7rcTUEiGCIlpW19IWDg9P2dhup9n1RUFjsKEsLFLFGLAvcOmxveFKp7vgnNHdFRVsKRpNUn2Lml-6dk59YDdJbtI-HOi3Fd2h3zfyiR5cAE4eEnvOw3dRWatU6lxlCVezm-ycS9PI4iiLEvlnW',
    statusLabel: 'Новые анализы',
    statusTone: 'tertiary',
    lastActivity: 'Вчера, 16:45',
    nextAppointment: '30 Октября, 14:00',
  },
  {
    id: 'sidorova',
    name: 'Сидорова М. И.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0rapt4CXcIUlDtka-2cIhW72-sg78uYfnBAqVekjTApJf_wwE4logy8a6w7LHTpTD3z9IM4V2QLdAhDO1GmZmCOQ6PAW_8KJZQ5TNpEe37Y76XvQaWtRR2ww1YX_B8xMIjKI93tta8OaiWzwfqrtLm3ST4XZ0kgIgJerkLrhlOvCKXZaTrT5wePBcBLw8VK9HUAC9jRqxCJP0FrjJROTiJI_UUU2L8dBQRcWHWYNLD2bbPrIraW3Z',
    statusLabel: 'Неактивен',
    statusTone: 'error',
    lastActivity: '2 недели назад',
    nextAppointment: null,
  },
  {
    id: 'kuznecov',
    name: 'Кузнецов А. В.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSn8thA1hN8NzDVUoQn-2bmNvwEUQuBaUrkEnohP2XXDt0IE5P4UPWIjH3JD7FKnVWcddRqbTiphNwl-38z25lOkzx72IYr6gN84xXT35Fq11mPJCmGd2b2ZK7eAz6fmMrCZPYPLftHlfXdEPBNewu3boTXEBZaAg7wpOfk2EQR1Z8lu23oA5munxgeMjto1LPFw8xJ_S17F2l0BtXSjxbZh46ptX8oJ66kfG0VQrz5gsv6xOgAsk4',
    statusLabel: 'Активен',
    statusTone: 'tertiary',
    lastActivity: '15 Октября',
    nextAppointment: '15:30',
  },
]
