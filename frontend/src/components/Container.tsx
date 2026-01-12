
const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="flex flex-col gap-6 my-8 px-3 py-5 lg:px-20">
      {children}
    </section>
  )
}

export default Container
