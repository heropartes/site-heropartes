# Manual de Operacao do Site Hero Partes

Este documento explica como o time de TI pode acessar, editar, testar e publicar novas versoes do site da Hero Partes hospedado na Vercel.

## 1. Acessos necessarios

Antes de comecar, a pessoa responsavel precisa ter:

- acesso ao repositorio no GitHub
- acesso ao projeto na Vercel
- permissao para instalar programas no computador

Repositorios e ambientes usados:

- GitHub: `https://github.com/heropartes/site-heropartes`
- Vercel: projeto `site-heropartes`
- Dominio em producao: `https://www.heropartes.com.br` ou `https://heropartes.com.br`

## 2. Programas que precisam estar instalados

Na maquina do responsavel, instalar:

- `Git`
- `Node.js LTS`
- `VS Code`

Depois da instalacao, abrir o terminal e validar:

```powershell
git --version
node -v
npm -v
```

Se os tres comandos responderem com versao, o ambiente esta pronto.

## 3. Baixar o projeto na maquina

Escolher uma pasta de trabalho e rodar:

```powershell
git clone https://github.com/heropartes/site-heropartes.git
cd site-heropartes\lp-hero-partes-main
npm install
```

Observacao importante:

- o projeto Next.js esta dentro da subpasta `lp-hero-partes-main`
- por isso os comandos devem ser executados dentro dessa pasta

## 4. Abrir o projeto no VS Code

Dentro da pasta do projeto, rodar:

```powershell
code .
```

Se o comando `code` nao funcionar, abrir o VS Code manualmente e selecionar a pasta:

`site-heropartes\lp-hero-partes-main`

## 5. Rodar o site localmente

No terminal da pasta do projeto:

```powershell
npm run dev
```

Depois abrir no navegador:

`http://localhost:3000`

Essa etapa serve para validar o site antes de publicar qualquer alteracao.

## 6. Fazer alteracoes no site

Fluxo recomendado:

1. abrir o projeto no VS Code
2. editar os arquivos necessarios
3. rodar `npm run dev`
4. validar o resultado no navegador
5. confirmar se tudo ficou correto antes de publicar

## 7. Publicar uma nova versao

Depois de concluir os testes locais, rodar:

```powershell
git add .
git commit -m "Descreva aqui a alteracao feita"
git push
```

Exemplo:

```powershell
git add .
git commit -m "Atualiza texto e banner da pagina inicial"
git push
```

## 8. Como o deploy funciona

O deploy esta integrado entre GitHub e Vercel.

Isso significa que:

- toda alteracao enviada para a branch `main` gera um novo deploy automaticamente
- nao e necessario subir manualmente pela Vercel
- a Vercel publica a nova versao sozinha apos o `git push`

## 9. Como validar se a publicacao deu certo

Depois do `git push`:

1. entrar na Vercel
2. abrir o projeto `site-heropartes`
3. acessar `Deployments`
4. verificar se o deploy ficou com status `Ready`

Se estiver `Ready`, testar o site online.

## 10. Enderecos importantes

- Producao: `https://www.heropartes.com.br`
- Alternativo: `https://heropartes.com.br`
- Projeto Vercel: `site-heropartes`
- Repositorio GitHub: `https://github.com/heropartes/site-heropartes`

## 11. Fluxo operacional padrao

Sempre seguir esta sequencia:

1. baixar o projeto ou atualizar com `git pull`
2. fazer a alteracao no VS Code
3. rodar `npm run dev`
4. testar no navegador
5. publicar com `git add .`, `git commit` e `git push`
6. validar o deploy na Vercel
7. validar o site online

## 12. Atualizar projeto local antes de editar

Antes de comecar uma nova alteracao, rodar:

```powershell
git pull
```

Isso evita trabalhar em uma versao antiga do projeto.

## 13. Se der erro no deploy

Se a publicacao nao funcionar:

1. abrir a Vercel
2. entrar em `Deployments`
3. abrir o deploy com erro
4. ler o log da compilacao
5. corrigir o problema localmente
6. fazer novo `git push`

## 14. Boas praticas

- sempre testar localmente antes de publicar
- sempre rodar `git pull` antes de iniciar uma nova alteracao
- usar mensagens de commit claras
- nao editar direto em producao sem validar
- confirmar o status `Ready` na Vercel apos cada publicacao

## 15. Estrutura atual do projeto

Pasta principal do repositorio:

```text
site-heropartes
└── lp-hero-partes-main
```

A pasta correta para trabalhar e rodar comandos e:

```text
site-heropartes\lp-hero-partes-main
```

## 16. Responsabilidade dos acessos

O responsavel pelo site deve manter:

- acesso ativo ao GitHub
- acesso ativo a Vercel
- acesso ao dominio na plataforma de DNS, se precisar alterar apontamentos

## 17. Resumo rapido

Comandos principais:

```powershell
git pull
npm install
npm run dev
git add .
git commit -m "Mensagem da alteracao"
git push
```

Resumo do processo:

- baixa ou atualiza o projeto
- faz a alteracao
- testa localmente
- envia para o GitHub
- a Vercel publica automaticamente
