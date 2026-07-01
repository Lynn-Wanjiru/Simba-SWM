import logoUrl from '@/imports/logo.svg'

interface LogoProps {
  height?: number
  className?: string
}

export default function Logo({ height = 42, className = '' }: LogoProps) {
  return (
    <img
      src={logoUrl}
      height={height}
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      alt="Simba Waste Management Logo"
      className={className}
    />
  )
}
