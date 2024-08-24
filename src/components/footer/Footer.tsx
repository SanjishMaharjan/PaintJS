import Logo from '../../assets/images/PaintJs.webp'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center justify-center bg-gradient-to-tr from-[#52438d] to-[#705f97] p-4 my-4 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 rounded-lg">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          ©️ Paint Js by{' '}
          <a href="https://github.com/SanjishMaharjan">Sanjish Maharjan</a>
        </h1>
      </div>
    </footer>
  )
}

export default Footer
