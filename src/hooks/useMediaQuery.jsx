import * as React from "react"

export const useMediaQuery = (query) => {
    const [value, setValue] = React.useState(false);

    React.useEffect(() => {
        const OnChange = (e) => {
            setValue(e.matches);
        };

        const result = matchMedia(query);
        result.addEventListener("change", OnChange);
        setValue(result.matches);

        return () => {
            result.removeEventListener("change", OnChange);
        };
    }, [query]);

    return value;
};