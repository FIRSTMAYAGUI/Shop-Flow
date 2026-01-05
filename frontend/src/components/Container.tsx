
const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-6 my-8 px-3 py-5 lg:px-20">
      {children}
    </div>
  )
}

export default Container
