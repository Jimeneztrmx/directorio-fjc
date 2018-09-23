import { Component, OnInit } from '@angular/core';
import { DirectoryService} from '../../services/directory.service'
import { Directory } from '../../models/directory';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { CompilerConfig } from '@angular/compiler';

@Component({
  selector: 'app-add-directory',
  templateUrl: './add-directory.component.html',
  styleUrls: ['./add-directory.component.css']
})
export class AddDirectoryComponent implements OnInit {
  
modal1State: boolean = false;
modal2State: boolean = false;


// Para validar
  frmRegistro: FormGroup;

  // LA SIGUIENTE LINEA ES COMPATIBLE UNICAMENTE CON ngModel y no con ForGroup  Builder
  directory: Directory={
    nombre:   '',
    apaterno: '',
    amaterno: '',
    telefono:  0,
    correo:   '',
    iglesia:  '',
    sector:   0
  };
  

  constructor(public directoryService: DirectoryService, public fb: FormBuilder) {
    this.frmRegistro = this.fb.group({
      nombre:   ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', Validators.required],
      telefono: ['', Validators.pattern('[0-9]+')],
      correo:   ['', Validators.email],
      iglesia:  ['', Validators.required],
      sector:   ['', Validators.pattern('[0-9]+')],
    })
    
  }


  ngOnInit() {
  }

 
  onSubmit()
  {
    //(if(this.directory.nombre != '' && this.directory.apaterno != '' && this.directory.amaterno != ''){
      //se agrega el registro
      
      this.directoryService.addRegistro(this.frmRegistro.value);
      //se limpian campos
      /*this.directory.nombre='';
      this.directory.apaterno='';
      this.directory.amaterno='';*/

      this.frmRegistro.reset();
      this.modal1State = true;
            
  //}
  }

  openModal1(){
    this.modal1State = true;
  }

  closeModal1(){
    this.modal1State = false;
  }

    
}

