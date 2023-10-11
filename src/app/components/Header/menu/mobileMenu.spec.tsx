import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileMenu from './mobileMenu';


describe('primeiro teste ', () => {
    it('Should render properly', () => {
        render(<MobileMenu />);
        screen.debug();
        expect(screen.getByText(''))
    })
})