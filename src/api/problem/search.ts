import {ProblemIndex} from "$util/algolia";

export async function search(keyword: string, page = 1) {
    if (!keyword) return {data: {count: 0, problems: []}};
    const data = await ProblemIndex.search(keyword, {page, hitsPerPage: 10})

    return {
        data: {
            count: data.nbHits,

            // @ts-ignore
            problems: data.hits.map(({id, title, _highlightResult}) => ({id, title, body: _highlightResult.body.value}))
        }
    };

}
