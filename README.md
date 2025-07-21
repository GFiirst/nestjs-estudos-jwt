NestJS JWT Auth (Estudos)
Descrição / O que é este projeto
Projeto simples em NestJS que implementa autenticação com JWT:

-Registro de usuário com hash de senha (bcrypt)

-Login com geração de token

-Próximos passos: adicionar JwtStrategy e rotas protegidas

-Ideal para estudos e aprendizado.

Funcionalidades:
-Registro de usuário: nova conta com email, username e senha criptografada
-Login: valida email + senha, retorna access_token
-JWT: token expira em 1 dia (configurável)

Tecnologias usadas:
-NestJS (framework)
-TypeORM + MySQL (banco de dados)
-@nestjs/jwt + passport-jwt (autenticação)
-bcrypt (hash de senha)
-@nestjs/config (variáveis de ambiente)
-class-validator / class-transformer (validação de dados)

Pré-requisitos:
-Node.js (v16+)
-MySQL (pode usar Docker)
-Editor de código (VSCode, etc.)

