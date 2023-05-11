import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
    return List([...page1, ...page2]);
}

export function mergeElements(page1, page2) {
    const mergedMap = Map(page1).merge(Map(page2));
    return List(mergedMap.valueSeq());
}
