import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Glow */}
        <div className="pointer-events-none absolute w-[600px] h-[600px] bg-[#ece883]/10 blur-[150px] animate-pulse rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-slate-900 relative z-10">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#ece883]/10 border border-[#ece883]/20 px-3 py-1 text-sm text-[#ece883] mb-4">
              Plataforma Veterinaria
            </div>

            <h1 className="text-4xl font-bold text-white select-none">
              Vet<span className="text-[#ece883]">Care+</span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-md">
              La plataforma para clínicas veterinarias modernas.
            </p>

            <p className="mt-3 text-slate-500">
              Gestiona pacientes, citas y historiales clínicos desde un solo
              lugar.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-[#ece883]" />
                Pacientes y propietarios
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-[#ece883]" />
                Agenda veterinaria
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-[#ece883]" />
                Control de vacunas
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-[#ece883]" />
                Historial clínico centralizado
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="VetCare+"
              className="w-[360px] object-contain select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900/70 backdrop-blur-xl border-l border-white/10 p-10 lg:p-14 flex flex-col justify-center relative z-10">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-white">Bienvenido</h2>

            <p className="mt-2 text-slate-400">
              Accede a tu plataforma veterinaria.
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Correo electrónico
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-800/70
                      text-white
                      placeholder:text-slate-500
                      pl-12
                      pr-4
                      py-3
                      outline-none
                      transition
                      focus:border-[#ece883]
                      focus:ring-4
                      focus:ring-[#ece883]/20
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Contraseña
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-800/70
                      text-white
                      placeholder:text-slate-500
                      pl-12
                      pr-12
                      py-3
                      outline-none
                      transition
                      focus:border-[#ece883]
                      focus:ring-4
                      focus:ring-[#ece883]/20
                    "
                  />

                  <div
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      group
                    "
                  >
                    <button
                      type="button"
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                      onClick={() => setShowPassword(!showPassword)}
                      className="
                        text-slate-500
                        hover:text-slate-300
                        transition
                      "
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>

                    <div
                      className="
                        absolute
                        right-0
                        -top-11
                        px-3
                        py-1.5
                        rounded-lg
                        bg-slate-950
                        border
                        border-slate-700
                        text-white
                        text-xs
                        shadow-lg
                        whitespace-nowrap
                        opacity-0
                        pointer-events-none
                        transition-all
                        duration-200
                        translate-y-1
                        group-hover:opacity-100
                        group-hover:translate-y-0
                      "
                    >
                      {showPassword
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    className="
                      h-4
                      w-4
                      rounded
                      border-slate-600
                      bg-slate-800
                      text-[#ece883]
                    "
                  />
                  Mantener sesión iniciada
                </label>

                <button
                  type="button"
                  className="text-slate-400 hover:text-white transition"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-[#ece883]
                  text-slate-900
                  font-semibold
                  tracking-wide
                  py-3.5
                  rounded-xl
                  transition
                  hover:bg-[#e4df6a]
                  hover:shadow-lg
                  hover:shadow-[#ece883]/20
                  active:scale-[0.99]
                "
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
