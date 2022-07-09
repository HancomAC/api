import {ProblemIndex} from "$util/algolia";
import {error} from "$util/log";

export async function search(keyword: string, page = 1) {
    const data = await ProblemIndex.search(keyword, {page, hitsPerPage: 10})

    return {
        data: {
            count: data.nbHits,

            // @ts-ignore
            problems: data.hits.map(({id, title, _highlightResult}) => ({id, title, body: _highlightResult.body.value}))
        }
    };

}
