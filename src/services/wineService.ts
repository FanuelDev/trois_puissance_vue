import http from "./http";

export default {
    listWines() {
        return http.get<any>('/public/wines');
    },

    searchWine(data: string) {
        return http.get<any>('/public/wines/search/' + data);
    },

    listProducteur() {
        return http.get<any>('/public/wineproducers');
    },

    listCouleur() {
        return http.get<any>('/public/colors');
    },

    listCountries() {
        return http.get<any>('/public/countries');
    },

    listGrapes() {
        return http.get<any>('/grapes');
    },
};
