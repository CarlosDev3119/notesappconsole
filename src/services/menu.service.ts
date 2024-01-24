import { prompt } from 'enquirer';

import { colorAdapter } from "../config";


export async function menuService() {

    return await prompt({
      type: 'input',
      name: 'menuOpcion',
      message: `${colorAdapter.textGreen('Selecciona la letra para la opcion que necesitas Ej.(a)')}
      ${colorAdapter.textBlue('a) crear nota')}
      ${colorAdapter.textBlue('b) ver notas')}
      ${colorAdapter.textBlue('c) actualizar nota')}
      ${colorAdapter.textBlue('d) eliminar nota')}
      ${colorAdapter.textRed('f) salir del sistema')}
      `
    });

    
}

