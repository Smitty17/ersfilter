
const Minimal = props => (

  <section className="flex flex-row h-screen">
    <main className='flex flex-col flex-grow '>
      <section className="flex-grow bg-one p-gut">
        {props.children}
      </section>
      <footer>Footer {process.env.ENVIRONMENT}</footer>
    </main>

  </section>
)

export default Minimal;