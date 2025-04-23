import { useState } from 'react'

const Content = () => {
    const [color, establecerColor] = useState("red");
    const [colores, establecerColores] = useState(["red", "yellow", "green"]);
  
    const alternarColor = () => {
      const indiceActual = colores.indexOf(color);
      const siguienteIndice = (indiceActual + 1) % colores.length;
      establecerColor(colores[siguienteIndice]);
    };
  
    const agregarPurple = () => {
      if (!colores.includes("purple")) {
        establecerColores([...colores, "purple"]);
      }
    };
  
    return (
        <>
        <div className="container justify-content-center my-3">
            <div className="row my-1">
                <div className="col-md-12 p-2 rounded-3 bg-secondary d-flex justify-content-center">
                    <button type="button" class="btn btn-primary mx-2" onClick={alternarColor}>Cambiar color</button>
                    <button type="button" class="btn btn-success mx-2" onClick={agregarPurple}>Añadir Purpura</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 rounded-3 bg-dark d-flex flex-column align-items-center p-4">
                    <div className="container-semaforo">
                        {colores.map((c) => (
                            <div
                                key={c}
                                className={`brillo ${c} ${color === c ? "active" : ""}`}
                                onClick={() => establecerColor(c)}
                            />
                        ))}
                    </div>
                    <div className="palo">
                    </div>
                </div>
            </div>
        </div>

    </>
    );
  }