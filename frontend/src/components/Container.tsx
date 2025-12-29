
const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-6 border my-5 px-3 py-5 lg:px-20 h-100">
      {children}
    </div>
  )
}

export default Container
