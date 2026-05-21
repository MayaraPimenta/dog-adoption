## DogCard

### Props
| prop    | tipo   | obrigatório | descrição          |
|---------|--------|-------------|-------------------|
| dog     | Dog    | sim         | dados do cachorro  |
| index   | number | não         | posição na pilha   |

### Eventos emitidos
- `swipe-right(dogId: string)` — usuário curtiu
- `swipe-left(dogId: string)` — usuário passou

### Estados
- idle: card visível, centrado
- dragging: card seguindo o dedo/mouse
- dismissed: animação de saída

### Critérios de aceite
- [x] Exibe foto, nome, raça e idade
- [x] Arrasto > 80px para direita emite swipe-right
- [x] Arrasto > 80px para esquerda emite swipe-left
- [x] Card retorna ao centro se arrasto < 80px
