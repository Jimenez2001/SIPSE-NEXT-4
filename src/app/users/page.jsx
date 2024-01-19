"use client";
import React, { useEffect, useRef } from "react";
import Layout from "../components/layoout";
import { useFetch } from "../components/useFetch";
import "datatables.net-dt/css/jquery.dataTables.css"; // Agrega la hoja de estilos de DataTables
import $ from "jquery"; // Importa jQuery
import "datatables.net";

export default function Users() {
   const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

 /*  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://localhost:7296/api/Users"
  ); */

  const tableRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !loading && data) {
      // Inicializar DataTable cuando los datos estén disponibles
      $(tableRef.current).DataTable({
        language: {
          lengthMenu: "Mostrar _MENU_ registros",
          zeroRecords: "No se encontraron resultados",
          info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          infoEmpty:
            "Mostrando registros del 0 al 0 de un total de 0 registros",
          infoFiltered: "(filtrado de un total de _MAX_ registros)",
          search: "Buscar:",
          paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior",
          },
          processing: "Procesando...",
        },
      });
    }
  }, [loading, data]);

  return (
    <Layout>
      <div>
        <h1>Usuarios</h1>
      </div>
      <div className="container">
        <button className="btn btn-danger" onClick={handleCancelRequest}>
          Cancelar
        </button>
        <button className="btn btn-primary">Crear</button>
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table
                id="example"
                className="table table-striped table-bordered"
                ref={tableRef}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                     <th>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {error && (
                    <tr>
                      <td colSpan="3">Error: {error}</td>
                    </tr>
                  )}
                  {loading && (
                    <tr>
                      <td colSpan="3">
                        <div className="d-flex justify-content-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  {data?.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
