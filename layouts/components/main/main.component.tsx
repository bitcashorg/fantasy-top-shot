export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-20">
      <div className="p-20 mb-20">{children}</div>
    </main>
  )
}
