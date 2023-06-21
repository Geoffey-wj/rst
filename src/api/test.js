import request from "@/utils/request";

export function getData() {
    return request({
        url: "/home/getData",
        method: "post",
    })
}