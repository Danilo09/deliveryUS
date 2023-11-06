import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from './header';
import MobileMenu from './menu/mobileMenu';

describe('Button menu mobile works ', () => {
    const { getByTestId } = render(<Header />);

    expect(<MobileMenu />).toBeFalsy();

    const toggleMenu = getByTestId('toggleMenu');
    fireEvent.click(toggleMenu);

    screen.debug();

    expect(<MobileMenu />).toBeTruthy();



    // fireEvent.click(toggleMenu);

    // expect(queryByText('Menu is on')).toBeNull();

    // it('Should render properly', () => {
    //     render(<MobileMenu />);
    //     screen.debug();
    //     expect(screen.getByText(''))
    // })
})