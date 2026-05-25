import { useState } from "react"

import {
  Menu,
  Search,
  Sun,
  Moon,
  Bell,
  UserCircle,
  Settings,
  LogOut,
} from "lucide-react"

interface NavbarProps {
  isDark: boolean
  isMobile: boolean
  onToggleDrawer: () => void
  onToggleTheme: () => void
}

const Navbar = ({
  isDark,
  isMobile,
  onToggleDrawer,
  onToggleTheme,
}: NavbarProps) => {

  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false)

  // avatar temporal mientras hacemos algo más cursed y bonito
  const user =
    "https://github.com/Cthululzz.png"

  return (
    <nav className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-colors duration-300">

      <div className="px-4 sm:px-6 py-3">

        <div className="flex items-center justify-between">

          {/* Sección izquierda */}
          <div className="flex items-center gap-3">

            {/* menú mobile */}
            {isMobile && (
              <button
                onClick={onToggleDrawer}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            )}

            <div className="hidden sm:block">

              <h2 className="font-semibold text-gray-800 dark:text-white">
                Bienvenido Cthululz 🦑
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                ¡Ten un Eggcelente día!
              </p>

            </div>

          </div>

          {/* Sección derecha */}
          <div className="flex items-center gap-2">

            {/* Search desktop */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-white/10 rounded-lg px-3 py-2 min-w-64">

              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-300 placeholder:text-gray-400 w-full"
              />

            </div>

            {/* búsqueda mobile */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">

              <Search className="w-5 h-5 text-gray-700 dark:text-gray-300" />

            </button>

            {/* Cambiar tema */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >

              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}

            </button>

            {/* Notificaciones */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">

              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />

              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

            </button>

            {/* Usuario */}
            <div className="relative">

              <button
                onClick={() =>
                  setIsDropdownOpen(!isDropdownOpen)
                }
                className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >

                <img
                  src={user}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 dark:border-white/20"
                />

              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <>

                  {/* overlay */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() =>
                      setIsDropdownOpen(false)
                    }
                  />

                  {/* menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-white/10 z-20">

                    {/* info usuario */}
                    <div className="p-4 border-b border-gray-200 dark:border-white/10">

                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Cthululz
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        cthululz@example.com
                      </p>

                    </div>

                    {/* opciones */}
                    <div className="p-2">

                      <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">

                        <UserCircle className="w-4 h-4" />

                        Profile

                      </button>

                      <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">

                        <Settings className="w-4 h-4" />

                        Settings

                      </button>

                      <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">

                        <LogOut className="w-4 h-4" />

                        Logout

                      </button>

                    </div>

                  </div>

                </>
              )}

            </div>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar