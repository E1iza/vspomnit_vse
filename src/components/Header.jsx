import logo from '/vite.svg'

export default function Header() {
  return (
    <header className="bg-sky-500">
      <img src={logo} alt=""/>
      <h3>Заголовок</h3>
    </header>
  )
}