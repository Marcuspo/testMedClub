# Consultas App :calendar:

Aplicativo criado por Marcus Pontes para gerenciamento de consultas médicas. O Consultas App permite que os usuários agendem, gerenciem e acompanhem suas consultas de forma simples e eficiente.

## Funcionalidades :clipboard

- Listar todas as consultas agendadas do usuário, com a data, hora e médico :memo:
- Mostrar os detalhes de uma consulta ao clicar nela, incluindo a data, hora, médico, especialidade e localização :mag_right:
- Adicionar uma nova consulta, inserindo a data, hora, médico, especialidade e localização :heavy_plus_sign:
- Excluir uma consulta agendada :x:

## Imagens

![Tela principal](https://imgur.com/BQIJf1J)
![Tela com consulta cadastrada](https://imgur.com/LWqSbDY)
![Tela com modal aberto](https://imgur.com/i9bqqwH)
![Tela de cadastro novas consultas](https://imgur.com/cNSARWR)

## Como utilizar :question:

Para utilizar o Consultas App, siga os seguintes passos:

1. Clone o repositório:

```git clone https://github.com/Marcuspo/testMedClub```

2. Instale as dependências:

```yarn```

3. Inicie o aplicativo:

```yarn start``` or ```yarn android``` or ```yarn iOs```

## Tecnologias utilizadas :computer:

- React Native :atom_symbol:
- React Navigation :round_pushpin:
- Styled Components
- Async-Storage
- Date time picker
- Moment
- React Native modal

## Observações

Algumas observações sobre o projeto

1 - Projeto testado apenas no Android
2 - Persitência de dados apenas no asyncstorage com limite de dados
3 - Aplicativo já funcionando a opção de darkMode buscando a opção selecionada nas configurações do usuário.

## Contribuição :handshake:

Sinta-se livre para contribuir com o Consultas App. Basta seguir os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua nova feature (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e adicione seus commits (`git commit -am 'Adicionando nova feature'`).
4. Faça um push para a sua branch (`git push origin feature/nova-feature`).
5. Abra um pull request para a branch master deste repositório.

## Licença :memo:

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.