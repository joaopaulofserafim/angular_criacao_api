import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularcrud');
  titulo: string = 'Olá Mundo'
  nome: string = 'Seu Nome'
  sobrenome: string = '';
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false;
  mensagem: string = '';


  onBotaoClicado() {
    this.mensagem = 'Você clicou no botão!';
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }

}