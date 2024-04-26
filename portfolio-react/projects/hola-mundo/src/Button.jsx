// para poder ver los button en la pagina web tenemos que exportar la function en main

export function Button() {
  return (
    <React.Fragment>
      <button>button 1</button>
      <button>button 2</button>
    </React.Fragment>
  );
}

/*qualquier nombre de los componentes se crea en  Pascalcase osea se inicia con MAIUSCULA
asi diferencia entre el elemento html y un componente

solo le podemos pasar un elemento si queremos dos va a dar error
<button>hola button</button>

un modo de pasarle mas button es metiendole dentro react.fragment */

/*otro modo de usar react.fragment es <> </> es lo mismo solo que se sobreentiende lo mismo:
<>
<button>button 1</button>
<button>button 2</button>
</>
ojo:
para poder separados los button tenemos que meterlo en un div o section osea dentro de un contenedor 
asi hay recien poniendole una className al qual lo llevamos al index.css (global en este caso a nivel de aplicazion)
ahy recien le ponemos los cambios 
de separacion entre ellos
ejemplo:

de asi  
<>
<button>button 1</button>
<button>button 2</button>
</>


diventera asi:

<section className="App">
<button>button 1</button>
<button>button 2</button>
</section>


  */
