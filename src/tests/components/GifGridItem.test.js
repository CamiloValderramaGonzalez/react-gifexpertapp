import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en GifGrid', () => {
    const title = 'titulo';
    const url = 'http://url.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener el src y el alt', () => {
        const img = wrapper.find('img');

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);

    })

    test('Debe tener la clase fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.props().className;

        expect(className.includes('animate__fadeIn')).toBe(true);

    })

})

