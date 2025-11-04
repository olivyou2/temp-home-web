import type { TempLog } from "$lib/types/tempLog";

export const load = async (params) => {
    const fetchUrl = "https://backend.temp.suplitter.com/api/temp/?hours=144";

    const response = await fetch(fetchUrl);
    const data = await response.json();
    return {
        temps: data
    } as { temps: TempLog[] };
}