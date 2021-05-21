import {createContext, useContext} from 'react';
const ParseContext = createContext({
    Parse : '',
});
export function useParse() {
    return useContext(ParseContext);
}
export default ParseContext;