// function getCodeGenesis(code) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if (code != 15) {

//                 reject(new Error(`Código ${code} inválido`));
//                 return;
//             }

//             resolve(25);

//         }, 2000);

//     });
// }


// export { getCodeGenesis };

import { cpus, version } from 'node:os';

function getInfoCPU() {
    return { cpus_: cpus(), version_: version() };
}

const { cpus_, version_ } = getInfoCPU();

cpus_.forEach(obj => {
    console.log(obj);
});
