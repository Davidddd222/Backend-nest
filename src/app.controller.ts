import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Studen.entity';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endpoint: Puerta del proyceto
  //          Acepta condiciones de clientes bajo una URL semantica
  //          Retomar el (los) datos esperados del cliente
  @Get()
  getHello(): string {
    return this.appService.getHello();
    
  }

  //Segundo endpoint - ESTRUCTURAR UN 
  //         1.  Verbo(Metodo) http sobre el cual recibir
  //             Metodos disponibles: GET, PORT, PUT, DELETE
  //             Junto a la ruta a invocar
  //         2.Firma del metodo a ejecutar
  //           cuando se invoque el endpoint
  @Get("/ficha")
  getFicha(): string {
     return "endpoint de la ficha 2902023"
  }

  //Tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
  getIdentificacion(@Param ('id') id : string, 
                    @Param('ciudad') ciudad : string,
                    @Query('nombre') nombre : string,
                    @Query('edad') edad: number): Student {
    return new Student(+id, "David", 12, "ciudad");
  }

}
