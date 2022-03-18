import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('NO Debe postear la informacion con submit', () => {
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar al setCategories y limpiar el formulario', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value: value } });

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() { } })

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.text().trim()).toBe('');
    })
})