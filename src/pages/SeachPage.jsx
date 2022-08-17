import React, {useMemo} from 'react';
import {useLocation, useParams} from "react-router-dom";

function useQuery() {
    const {search} = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

const SeachPage = () => {
    const query = useQuery();
    console.log(useLocation());

    console.log(query.get("query"));
    return (
        <div>
            SEARCH PAGE<br />
            query: {query.get("query")}
        </div>
    );
};

export default SeachPage;