import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => {
  test('should add items to the cart', () => {
    render(<ShoppingCart />);

    // Find the product item
    const productItem = screen.getByTestId('product-item');
    
    // Find the add to cart button
    const addToCartButton = screen.getByTestId('add-to-cart-button');
    
    // Click the add to cart button
    fireEvent.click(addToCartButton);
    
    // Find the cart count
    const cartCount = screen.getByTestId('cart-count');
    
    // Assert that the cart count is updated to 1
    expect(cartCount.textContent).toBe('1');
  });

  test('should remove items from the cart', () => {
    render(<ShoppingCart />);
    
    // Find the remove from cart button
    const removeFromCartButton = screen.getByTestId('remove-from-cart-button');
    
    // Click the remove from cart button
    fireEvent.click(removeFromCartButton);
    
    // Find the cart count
    const cartCount = screen.getByTestId('cart-count');
    
    // Assert that the cart count is updated to 0
    expect(cartCount.textContent).toBe('0');
  });
});