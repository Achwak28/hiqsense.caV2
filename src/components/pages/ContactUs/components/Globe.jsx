import React from 'react'
import { useEffect, useRef } from 'react'
import createGlobe from 'cobe';

export const Globe = () => {
    const canvasRef = useRef();
    const [canvasWidth, setCanvasWidth] = React.useState(0);
    useEffect(() => {
        let phi = 0;
        let width = 0;
        let spin = true;
        const onResize = () => canvasRef.current && (
            width = canvasRef.current.clientWidth,
            setCanvasWidth(width)
        )
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width > 902 ? 902 * 2 : width * 2,
            height: width > 902 ? 1060 * 1.7 : width * 2 * 1.15,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.6,
            mapSamples: 16000,
            mapBrightness: 12.0,
            baseColor: [139 / 255, 154 / 255, 96 / 255],
            markerColor: [0.1, 0.8, 1],
            glowColor: [75 / 255, 63 / 255, 171 / 255],
            markers: [],
            scale: 1,
            offset: [0, 0],
            onRender: (state) => {
                state.width = width > 902 ? 902 * 2 : width * 2;
                state.height = width > 902 ? 1060 * 1.7 : width * 2 * 1.15;

                state.phi = phi;
                if (spin) phi += 0.013;
            }
        })
        setCanvasWidth(width)
        setTimeout(() => canvasRef.current.style.opacity = '1')
        setTimeout(() => spin = false, 8000)
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [canvasWidth])

    if (canvasWidth === 0) return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                    backgroundColor: '#4334B6'
                }}
            />
        </>
    )

    return (
        <div className='flex justify-center lg:justify-end h-[56.37825rem] relative w-full max-w-[1200px] mx-auto'>
            <div className='absolute w-full h-[56.37825rem] bg-[#4334B6]'></div>
            <div className="w-full flex justify-center lg:justify-end  z-[10] bg-[#4334B6] opacity-50">
                <div className='flex justify-center lg:justify-end  w-full max-w-[790px] h-[56.37825rem]'>
                    <div style={{
                        width: '100%',
                        height: canvasWidth > 902 ? 902 : canvasWidth * 1.09,
                        aspectRatio: 1 / .4,
                        margin: 'auto',
                        position: 'relative',
                        maxWidth: '790px',
                    }} className='mix-blend-exclusion'>
                        <canvas
                            ref={canvasRef}
                            style={{
                                width: '100%',
                                height: '100%',
                                contain: 'layout paint size',
                                opacity: 0,
                                transition: 'opacity 1s ease',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
