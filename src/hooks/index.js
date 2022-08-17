import {useState} from "react";
import {useEffect} from "react";

export function useNoScroll() {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (state) {
            document.body.style.overflow = "hidden";
            return;
        }
        document.body.style.overflow = "visible";
    }, [state]);

    return [state, setState];
}