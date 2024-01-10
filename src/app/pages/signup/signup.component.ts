import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user = {
    userName: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    phone: ''

  }

  constructor(private userService:UserService, private snack :MatSnackBar){}

  ngOnInit(): void {

  }


  formSubmit(){
    console.log(this.user);
    if(this.user.userName == '' || this.user.userName == null){
      this.snack.open("Nombre de usuario requerido !!", "Aceptar",{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Usuario guardado","Usuario registrado con exito en el sistema", 'success');
      },(error) =>{
        console.log(error);
        this.snack.open("Ha ocurrido un error en el sistema", "Aceptar",{
          duration : 3000,
        });
      }
    )
  }

}
