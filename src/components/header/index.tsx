import Logo from '../../assets/images/PaintJs.webp'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky flex items-center justify-center bg-gradient-to-tr from-[#52438d] to-[#705f97] p-4 rounded-lg shadow-lg cursor-pointer">
      <div className="flex items-center space-x-4 rounded-lg">
        <img
          src={Logo}
          alt="logo"
          className="h-16 w-16 rounded-full border-4 border-white shadow-md"
        />
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Paint Js
        </h1>
      </div>
    </header>
  )
}

export default Header
