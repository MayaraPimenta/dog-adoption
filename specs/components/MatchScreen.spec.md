## MatchScreen

### Props
| prop    | tipo   | obrigatório | descrição                        |
|---------|--------|-------------|----------------------------------|
| dog     | Dog    | sim         | cachorro que foi curtido         |

### Eventos emitidos
- `close()` — usuário fechou a tela de match
- `view-liked()` — usuário navegou para a lista de curtidos

### Estados
- visible: overlay exibido com animação de entrada
- hidden: overlay ocultado após fechar

### Critérios de aceite
- [x] Exibe foto, nome e raça do cachorro curtido
- [x] Exibe mensagem de parabéns/match
- [x] Botão "Continuar" emite close
- [x] Botão "Ver curtidos" emite view-liked
- [x] Animação de entrada ao montar o componente
