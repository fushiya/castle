import React, {createContext} from "react";

function noop() {}

export const AdminContext = createContext({
    collections: [],
    setCollections: noop(),
    currentCollection: null,
    setCurrentCollection: noop()
});
