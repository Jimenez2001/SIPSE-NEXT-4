"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Aside({ open, setOpen }) {
  const router = useRouter();

  return (
    <div className={`${open ? "aside" : "contraer-aside"} text-light`}>
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-danger icon-aside"
      >
        x
      </button>
      <Link
        href="/dashboard"
        className={`text-light fs-1 text-decoration-none ${!open && "d-none"}`}
      >
        SIPSE
      </Link>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          {/* HISTORIAL */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Historial
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="list-group ">
              <a
                href="/historial"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Historial de Errores
              </a>
             {/*  <a href="#" className="list-group-item list-group-item-action">
                Segundo Item
              </a> */}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          {/* CATALOGOS */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Catálogos
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-content list-group">
              <a
                href="/catalogos/catunidmedida"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Categoría Unidad de Medida
              </a>
              <a href="/catalogos/unidadmedida" className="list-group-item accordion-content">
                Unidad de Medida
              </a>
              <a href="/catalogos/responsable" className="list-group-item accordion-content">
                Responsable
              </a>
              <a href="/catalogos/indicador" className="list-group-item accordion-content">
                Indicador
              </a>
              <a href="/catalogos/vinculacion" className="list-group-item accordion-content">
                Vinculación
              </a>
              <a href="/catalogos/dependencias" className="list-group-item accordion-content">
                Dependencias
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          {/* ADMINISTRACION */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Administración
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="list-group">
              <a
                href="/administracion/asignardependencia"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Asignar Dependencia
              </a>
             {/*  <a href="#" className="list-group-item list-group-item-action">
                Unidad de Medida
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
