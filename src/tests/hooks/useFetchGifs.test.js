import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {
    test('Debe traer 0 gifs', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate()

        expect(data).toEqual([]);
        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    })

    test('Debe traer 10 gifs', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate()

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})