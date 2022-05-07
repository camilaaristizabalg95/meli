import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }

  setLoading(){
    this.loading$.next(true);
  }

  clearLoading(){
    this.loading$.next(false);
  }

  getLoading$(){
    return this.loading$;
  }
}
