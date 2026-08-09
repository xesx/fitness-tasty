const SLOT_COUNT = 6

interface SparklineProps {
  values: number[]
  dangerFromIndex?: number
}

export function Sparkline({ values, dangerFromIndex }: SparklineProps) {
  return (
    <div className="flex h-8 w-24 items-end overflow-hidden rounded bg-surface-container opacity-80">
      {Array.from({ length: SLOT_COUNT }, (_, index) => {
        const value = values[index]
        const isDanger = dangerFromIndex !== undefined && index >= dangerFromIndex
        return (
          <div
            key={index}
            className={`mr-px w-1/6 last:mr-0 ${
              value === undefined ? 'bg-transparent' : isDanger ? 'bg-error' : 'bg-outline-variant'
            }`}
            style={{ height: value === undefined ? 0 : `${value}%` }}
          />
        )
      })}
    </div>
  )
}
