import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: "fernando.herrera@gmail.com",
    //pasatiempos: ["correr", "Dormir", "Comer"]
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noHerrera
        ])
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password01': new FormControl('', Validators.required),
      'password02': new FormControl('', Validators.required)
    });

    //this.forma.setValue(this.usuario);

    this.forma.controls['password02'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])

    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }


  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === "herrera") {
      return {
        noherrera: true
      }
    }

    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    //noIgual(control: FormControl): any {

    //console.log(this);
    let forma: any = this;
    if (control.value !== forma.controls['password01'].value) {
      return {
        noiguales: true
      }
    }

    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {

    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === "strider") {
            resolve({
              existe: true
            })
          }
          else {
            resolve(null)
          }
        }, 3000)
      }
    )

    return promesa;

  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });

    //this.forma.controls['correo'].setValue('asdasd@adsasd.com');

  }

}
