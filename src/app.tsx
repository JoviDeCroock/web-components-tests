import { useEffect } from 'preact/hooks'

export function App() {
  useEffect(() => {
    import('./Element')
  }, [])

  return (
    <app-counter>
      <div>
        <p>Count: 0</p>
        <button>+</button>
      </div>
    </app-counter>
  )
}
