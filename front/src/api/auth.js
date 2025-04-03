import api from "./axios";


export const AuthRequest = async (name, phone) => {
    const data = {
        name : name,
        phone : phone
    }
    try{
        const response = await api.post("/auth/request",data);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const AuthVerify = async (phone, authCode) => {
    const data = {
        phone : phone,
        authCode : authCode
    }
    try {
        const response = await api.post("/auth/verify", data);
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
};