import { Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { IotdeviceListar } from './components/iotdevicecomponent/iotdevice-listar/iotdevice-listar';
import { IotdeviceInsertar } from './components/iotdevicecomponent/iotdevice-insertar/iotdevice-insertar';
import { SensorListar } from './components/sensorcomponent/sensor-listar/sensor-listar';
import { SensorInsertar } from './components/sensorcomponent/sensor-insertar/sensor-insertar';
import { SensordataListar } from './components/sensordatacomponent/sensordata-listar/sensordata-listar';
import { SensordataInsertar } from './components/sensordatacomponent/sensordata-insertar/sensordata-insertar';
import { ResultadoevaluacionListar } from './components/resultadoevaluacioncomponent/resultadoevaluacion-listar/resultadoevaluacion-listar';
import { ResultadoevaluacionInsertar } from './components/resultadoevaluacioncomponent/resultadoevaluacion-insertar/resultadoevaluacion-insertar';
import { EvaluacionListar } from './components/evaluacioncomponent/evaluacion-listar/evaluacion-listar';
import { EvaluacionInsertar } from './components/evaluacioncomponent/evaluacion-insertar/evaluacion-insertar';
import { Iotdevicecomponent } from './components/iotdevicecomponent/iotdevicecomponent';
import { Sensorcomponent } from './components/sensorcomponent/sensorcomponent';
import { Sensordatacomponent } from './components/sensordatacomponent/sensordatacomponent';
import { Evaluacioncomponent } from './components/evaluacioncomponent/evaluacioncomponent';
import { Resultadoevaluacioncomponent } from './components/resultadoevaluacioncomponent/resultadoevaluacioncomponent';
import { Usercomponent } from './components/usercomponent/usercomponent';
import { UserListar } from './components/usercomponent/user-listar/user-listar';
import { UserInsertar } from './components/usercomponent/user-insertar/user-insertar';
import { UserRoleComponent } from './components/user-rolecomponent/user-rolecomponent';
import { RolesComponent } from './components/rolescomponent/rolescomponent';
import { Cursoscomponent } from './components/cursoscomponent/cursoscomponent';
import { CursosListar } from './components/cursoscomponent/cursos-listar/cursos-listar';
import { CursosInsertar } from './components/cursoscomponent/cursos-insertar/cursos-insertar';
import { Leccioncomponent } from './components/leccioncomponent/leccioncomponent';
import { LeccionListar } from './components/leccioncomponent/leccion-listar/leccion-listar';
import { LeccionInsertar } from './components/leccioncomponent/leccion-insertar/leccion-insertar';
import { Modulocomponent } from './components/modulocomponent/modulocomponent';
import { ModuloListar } from './components/modulocomponent/modulo-listar/modulo-listar';
import { ModuloInsertar } from './components/modulocomponent/modulo-insertar/modulo-insertar';
import { UserActualizar } from './components/usercomponent/user-actualizar/user-actualizar';
import { Authenticate } from './components/authenticate/authenticate';
import { seguridadGuard } from './guard/seguridad-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: Authenticate, }
    ],
    
  },
  {
    path: 'homes',
    component: Homecomponent,
  },

  // --- RUTAS PARA IOTDEVICE ---
  {
    path: 'iotdevices',
    component: Iotdevicecomponent,
    children: [
      { path: 'listar', component: IotdeviceListar },
      { path: 'insertar', component: IotdeviceInsertar },
    ],
  },

  // --- RUTAS PARA SENSOR ---
  {
    path: 'sensores',
    component: Sensorcomponent,
    children: [
      { path: 'listar', component: SensorListar },
      { path: 'insertar', component: SensorInsertar },
    ],
  },

  // --- RUTAS PARA SENSOR DATA ---
  {
    path: 'sensordata',
    component: Sensordatacomponent,
    children: [
      { path: 'listar', component: SensordataListar },
      { path: 'insertar', component: SensordataInsertar },
    ],
  },

  // --- RUTAS PARA EVALUACION ---
  {
    path: 'evaluaciones',
    component: Evaluacioncomponent,
    children: [
      { path: 'listar', component: EvaluacionListar },
      { path: 'insertar', component: EvaluacionInsertar },
    ],
  },

  // --- RUTAS PARA RESULTADO EVALUACION ---
  {
    path: 'resultados-evaluacion',
    component: Resultadoevaluacioncomponent,
    children: [
      { path: 'listar', component: ResultadoevaluacionListar },
      { path: 'insertar', component: ResultadoevaluacionInsertar },
    ],
  },

  //RUTA PARA USERS
  {
    path: 'usuarios',
    component: Usercomponent,
    children: [
      { path: 'listar', component: UserListar, canActivate: [seguridadGuard] },
      { path: 'insertar', component: UserInsertar },
      { path: 'edits/:id', component: UserActualizar, canActivate: [seguridadGuard], data: { renderMode: 'server' } },
    ],
  },

  // --- RUTAS PARA USER ROLES ---
  {
    path: 'user-roles',
    component: UserRoleComponent,
  },

  // --- RUTAS PARA ROLES ---
  {
    path: 'roles',
    component: RolesComponent,
  },

  // --- RUTAS PARA CURSOS ---
  {
    path: 'cursos',
    component: Cursoscomponent,
    children: [
      { path: 'listar', component: CursosListar },
      { path: 'insertar', component: CursosInsertar },
    ],
  },

  // --- RUTAS PARA LECCIONES ---
  {
    path: 'lecciones',
    component: Leccioncomponent,
    children: [
      { path: 'listar', component: LeccionListar },
      { path: 'insertar', component: LeccionInsertar },
    ],
  },

  // --- RUTAS PARA MODULOS ---
  {
    path: 'modulos',
    component: Modulocomponent,
    children: [
      { path: 'listar', component: ModuloListar },
      { path: 'insertar', component: ModuloInsertar },
    ],
  },
  {
   path: 'vr-test',
   loadComponent: () =>
      import('./components/vr-test/vr-test')
      .then(m => m.VrTestComponent)
  }
];
