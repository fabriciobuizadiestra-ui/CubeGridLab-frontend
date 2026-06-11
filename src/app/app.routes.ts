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

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homes',
        pathMatch: 'full'
    },
    {
        path: 'homes',
        component: Homecomponent
    },
    
    // --- RUTAS PARA IOTDEVICE ---
    { path: 'iotdevices', component: Iotdevicecomponent, 
        children:[
            {   path:'listar',  component:IotdeviceListar  },
            {   path:'insertar',  component:IotdeviceInsertar  }
        ]
    },
    
    
    // --- RUTAS PARA SENSOR ---
    { path: 'sensores', component: Sensorcomponent, 
        children:[
            {   path:'listar',  component:SensorListar  },
            {   path:'insertar',  component:SensorInsertar  }
        ]
    },


    // --- RUTAS PARA SENSOR DATA ---
    { path: 'sensordata', component: Sensordatacomponent, 
        children:[
            {   path:'listar',  component:SensordataListar  },
            {   path:'insertar',  component:SensordataInsertar  }
        ]
    }, 


    // --- RUTAS PARA EVALUACION ---
    { path: 'evaluaciones', component: Evaluacioncomponent, 
        children:[
            {   path:'listar',  component:EvaluacionListar  },
            {   path:'insertar',  component:EvaluacionInsertar  }
        ]
    }, 


    // --- RUTAS PARA RESULTADO EVALUACION ---
    { path: 'resultados-evaluacion', component: Resultadoevaluacioncomponent , 
        children:[
            {   path:'listar',  component:ResultadoevaluacionListar  },
            {   path:'insertar',  component:ResultadoevaluacionInsertar  }
        ]
    }, 
    
];