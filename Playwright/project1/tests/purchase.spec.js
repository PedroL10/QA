const { test, expect } = require('@playwright/test');

test('Jornada de compra completa', async ({ page }) => {
  // Acessar a página inicial
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(1000); // Pausa para visualização

  // Fazer login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.waitForTimeout(1000); // Pausa para visualização
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Adicionar produtos ao carrinho
  await page.click('text=Add to cart', { index: 0 });
  await page.waitForTimeout(1000); // Pausa para visualização
  await page.click('text=Add to cart', { index: 1 });
  await page.waitForTimeout(1000); // Pausa para visualização

  // Ir para o carrinho
  await page.click('.shopping_cart_link');
  await page.waitForTimeout(1000); // Pausa para visualização
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Iniciar o checkout
  await page.click('text=Checkout');
  await page.waitForTimeout(1000); // Pausa para visualização

  // Preencher informações de checkout
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('text=Continue');
  await page.waitForTimeout(1000); // Pausa para visualização
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Finalizar a compra
  await page.click('text=Finish');
  await page.waitForTimeout(1000); // Pausa para visualização
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
});