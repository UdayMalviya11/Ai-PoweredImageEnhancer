import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const enhancedImageAPI = async (file) => {
    try{
        const taskId = await uploadImage(file);
       

        const enhancedImageData = await PollForEnhancedImage(taskId);
        

       return enhancedImageData;
        
    } catch(error) {
        console.log("Error in enhancedImageAPI:", error);
    }
}

const uploadImage = async(file) => {
    const formData = new FormData();
    formData.append("image_file",file);

   const {data}  =  await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formData, {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY" : API_KEY,
        },
    });
    if(!data?.data?.task_id) {
        throw new Error("Error in uploading image! ");
    }
    
    return data?.data?.task_id;
};

const fetchEnhancedImage = async(taskId) => {
const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
        headers:{
            "X-API-KEY": API_KEY,

        },
    }
);
if(!data?.data) {
throw new Error("Failed to fetch enhanced image!")
}
return data.data;
}

const PollForEnhancedImage = async(taskId, retires = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4) {
        console.log("Processing...");
    
        if(retires >= 20) {
            throw new Error("Max retires reached. Please try again later.");
        }
        await new Promise((resolve)=> setTimeout(resolve,2000));
        return PollForEnhancedImage(taskId, retires + 1);
    }
    
   
    return result;
};