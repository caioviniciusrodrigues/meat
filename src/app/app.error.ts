import { Response } from '@angular/http';

import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
  static handleError( error: Response | any ) {
    let errorMessage: string;

    if( error instanceof Response ) {
      errorMessage = `Erro ${error.status} ao obter recurso ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.tostring();
    }

    console.log(errorMessage);

    return Observable.throw(errorMessage);
  }
}
