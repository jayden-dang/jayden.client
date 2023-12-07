import Header from '@/components/Header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="m-4">
        <Header />
        {children}
      </div>
    </>
  )
}
