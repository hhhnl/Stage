import request from "@/utils/request";

export const login = (data) => request({
    url: "/api/login",
    method: "POST",
    data
});

export const getHomeData = () => request({
    url: "/api/homeData",
    method: "GET"
});

export const getHistoryData = () => request({
    url: "/api/historyData",
    method: "GET"
});

export const addHistoryData = (data) => request({
    url: "/api/addHistoryData",
    method: "POST",
    data
});

export const editHistoryData = (data) => request({
    url: "/api/editHistoryData",
    method: "POST",
    data
});

export const deleteHistoryData = (data) => request({
    url: "/api/deleteHistoryData",
    method: "POST",
    data
});

export const searchHistoryData = (params) => request({
    url: `/api/searchHistoryData`,
    method: "GET",
    params
});
