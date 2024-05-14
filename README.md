# AIP-moon-light
Acampamento de código focado no framework Hapi, um projeto simples em Node para requisições http de origem job. Os testes serão executados localmente não havendo a necessidade de hospedagem. Se você estiver encorajado a participar do desenvolvimento seja bem vindo ao deserto.

## Preparo e aquecimento da forja:

### Instalando o *Node na versão 20.13.1*
```powershell
mkdir projetos-node; cd projetos-node; mkdir 20.13.1; cd 20.13.1

nvm install v20.13.1

nvm use v20.13.1

node -v > .nvmrc
```

oBS: Caso tenha que mudar para uma versão específica do Node
```powershell
nvm use $(Get-Content .nvmrc)
```
### Executando uma clonagem

Para uma clonagem baseada em SSH, não esqueça de trocar o "***account***".
```powershell
git clone git@github.com:<account>/AIP-moon-light.git
```
oBS: Após a clonagem não será necessário inicializar o repo local, possibilitando a integração entre o versionamento local e remoto.

### Editando projeto
Acessar a pasta *AIP-moon-light* e abrir o editor VSCode 
```powershell
cd AIP-moon-light

code .
```

## Execução de TESTES

Para a execução de um teste simples usando o módulo genesis

```powershell
node --test .\test\unit\genesis.test.js
```