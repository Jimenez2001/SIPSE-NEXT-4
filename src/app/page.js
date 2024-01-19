'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const router = useRouter();

  const handleLogin = () => {
    // Lógica de autenticación (puedes agregar la lógica de autenticación aquí)
    // Redirige a la página de inicio después de iniciar sesión
    router.push("/dashboard");
  };

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="card text-center" style={{ width: "auto" }}>
          <div className="card-body">
            <Image
              width={200}
              height={150}
              src={"/assets/img/react.png"}
              alt="Imagen Logo"
            ></Image>
            <form>
              <h1>Inicio de Sesión</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="correo@maga.gob.gt"
                />
                <div id="emailHelp" className="form-text">
                  No compartas tu correo y contraseña con otras personas
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
