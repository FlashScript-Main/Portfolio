import {useMedia} from 'react-use';

const useScreenSize = () => {

    const xs = useMedia('(min-width: 0px) and (max-width: 639px)');
    const sm = useMedia('(min-width: 640px) and (max-width: 767px)');
    const md = useMedia('(min-width: 768px) and (max-width: 1023px)');
    const lg = useMedia('(min-width: 1024px) and (max-width: 1279px)');
    const xl = useMedia('(min-width: 1280px) and (max-width: 1440px)');
    const xxl = useMedia('(min-width: 1440px)');

    return {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
    }

}

export default useScreenSize