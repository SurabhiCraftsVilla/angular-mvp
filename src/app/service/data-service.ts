import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export class DataService {

    headerConfig = {
        canHeaderBeFixed :false
    }

    getHeaderConfig() {
        return this.headerConfig;
    }

    setHeaderFixedState() {
        this.headerConfig.canHeaderBeFixed = true;
    }

    resetHeaderFixedState() {
        this.headerConfig.canHeaderBeFixed = false;
    }

}