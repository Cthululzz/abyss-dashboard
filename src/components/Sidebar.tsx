import {
  Boxes,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  LayoutDashboard,
  LineChart,
  Mail,
  Package,
  Settings,
  Shield,
  ShoppingBag,
  Tags,
  UserPlus,
  Users,
} from "lucide-react"

import { useState } from "react"
import logo from "../assets/logo.png"

interface SidebarProps {
  onCloseDrawer: () => void
}

const Sidebar = ({ onCloseDrawer }: SidebarProps) => {

  const [links, setLinks] = useState([
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },

    {
      name: "Analytics",
      icon: LineChart,
      active: false,
    },

    {
      name: "Reports",
      icon: FileText,
      active: false,
    },

    {
      name: "Users",
      icon: Users,
      active: false,
      open: true,

      children: [
        {
          name: "All Users",
          icon: Users,
        },

        {
          name: "Add New",
          icon: UserPlus,
        },

        {
          name: "Roles & Permissions",
          icon: Shield,
        },
      ],
    },

    {
      name: "Products",
      icon: ShoppingBag,
      active: false,
      open: false,

      children: [
        {
          name: "All Products",
          icon: Package,
        },

        {
          name: "Categories",
          icon: Tags,
        },

        {
          name: "Inventory",
          icon: Boxes,
        },
      ],
    },

    {
      name: "Messages",
      icon: Mail,
      active: false,
      badge: "+99",
    },

    {
      name: "Settings",
      icon: Settings,
      active: false,
    },
  ])

  const handleClick = (index: number) => {

    setLinks((prev) =>
      prev.map((link, i) => {

        if (i === index) {

          if (link.children) {
            return {
              ...link,
              open: !link.open,
              active: true,
            }
          }

          return {
            ...link,
            active: true,
          }
        }

        return link.children
          ? {
              ...link,
              active: false,
              open: false,
            }
          : {
              ...link,
              active: false,
            }
      })
    )
  }

  return (
    <aside className="fixed left-4 top-4 h-[calc(100%-2rem)] bg-gray-900 overflow-hidden rounded-xl shadow-2xl w-72 z-20 lg:mt-0 mt-14">

      <div className="h-16 flex items-center px-6 border-b border-white/10">

        <div className="flex items-center gap-0.5">

          <img
            src={logo}
            alt="Logo"
            className="w-23 h-23 object-contain rounded-lg"
          />

          <h1 className="text-xl font-bold text-white -ml-5">
            AbyssTech
          </h1>

        </div>

      </div>

      {/* Navigation */}
      <nav className="p-4 h-[calc(100%-8rem)] overflow-y-auto">

        <ul className="space-y-1">

          {links.map((link, index) => (
            <li key={index}>

              <button
                onClick={() => handleClick(index)}
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  link.active
                    ? "bg-[#ece883]/20 text-[#ece883] border-l-2 border-[#ece883]"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >

                {/* Icon */}
                <link.icon
                  className={`w-5 h-5 transition-transform group-hover:scale-105 ${
                    link.active
                      ? "text-[#ece883]"
                      : "text-gray-400"
                  }`}
                />

                <span className="flex-1 text-left text-sm font-medium">
                  {link.name}
                </span>

                {link.badge && (
                  <span className="bg-[#ece883] text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}

                {link.children && (
                  <span className="text-[#ece883]">
                    {link.open ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}

              </button>

              {link.children && link.open && (
                <ul className="ml-6 mt-1 space-y-1 border-l-2 border-white/10 pl-3">

                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>

                      <button
                        onClick={() => {

                          handleClick(index)

                          if (window.innerWidth < 768) {
                            onCloseDrawer()
                          }
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors"
                      >

                        {child.icon && (
                          <child.icon className="w-4 h-4 text-[#ece883]" />
                        )}

                        <span>
                          {child.name}
                        </span>

                      </button>

                    </li>
                  ))}

                </ul>
              )}

            </li>
          ))}

        </ul>

      </nav>

      {/* Footer */}
      <div className="absolute lg:bottom-3 md:bottom-3 bottom-16 left-4 right-4">

        <button
          onClick={() => {

            if (
              onCloseDrawer &&
              window.innerWidth < 768
            ) {
              onCloseDrawer()
            }
          }}
          className="w-full p-4 bg-[#ece883] rounded-xl transition-all duration-200 hover:bg-[#ece883] active:scale-95 group"
        >

          <div className="flex items-center justify-center gap-2">

            <Home className="w-4 h-4 text-gray-900" />

            <span className="text-sm font-semibold text-gray-900">
              Return to homepage
            </span>

          </div>

        </button>

      </div>

    </aside>
  )
}

export default Sidebar