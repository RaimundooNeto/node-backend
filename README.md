# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O carro deve ser cadastrado apenas por um usuários administradores.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possivel listar todos os carro disponiveis pelo nome da categoria.
Deve ser possivel listar todos os carro disponiveis pelo nome do carro.

**RF**
O usuário não precisa estar logado no sistema para listar os carros disponíveis.


# Cadstro de Especificação no carro

**RF**
Defve ser possível cadastrar uma especificação para um carro.
Deve ser possivel listar todas as especificações.
Deve ser possivel listar todos os carros.

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
Apenas usuários administradores podem cadastrar uma especificação.

# Cadatro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para o upload do arquivo.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O cadastro imagens so deve ser realizado por um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
