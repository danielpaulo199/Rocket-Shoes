import React from 'react';

import { Container, ProductTable, Total } from './styles';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/948/491/products/adidas-yeezy-boost-350-v2-core-black-red-by9612-original-offbr121-2f23f97a225109338215684957227086-480-0.jpg"
                alt="Yezzy 350 v2"
              />
            </td>
            <td>
              <strong>Adidas Yezzy 350 v2</strong>
              <span>R$980,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$1.961,98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$3.440,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
