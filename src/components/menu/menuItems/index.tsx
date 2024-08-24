export interface MenuItem {
  name: string
  icon: React.ReactNode
}

interface MenuItemsProps {
  name: string
  iconList: MenuItem[]
}

const MenuItems = (props: MenuItemsProps) => {
  const { name, iconList } = props
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-300 mb-2 relative inline-block">
        {name}
        <span className="block h-1 w-full bg-gray-800 mt-1"></span>
      </h1>
      <div className="flex flex-wrap gap-4">
        {iconList.map((tool, index) => (
          <button
            key={index}
            className="flex items-center justify-center border-2 border-black text-black m-2 p-3 rounded-full hover:bg-[#9d83e0] transition-all duration-300"
            aria-label={tool.name}
          >
            {tool.icon}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MenuItems
