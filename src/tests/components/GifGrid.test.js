import React from 'react'
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', () => {

    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category='One Punch' />)

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar items', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://url.com',
            title: 'titulo'
        },
        {
            id: 'ABCD',
            url: 'http://url.com',
            title: 'titulo2'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category='One Punch' />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})