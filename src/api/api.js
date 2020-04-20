import * as axios from "axios";

// объект с дефолтными настройками запроса
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6dc64a36-ec10-411f-b11d-c98c17f272e5"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(responce => {
                return responce.data;
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(responce => {
                return responce.data;
            })
    }
}

export const authApi = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    loginUser(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
    }
}

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}







