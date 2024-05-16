import axios from "axios";


export const sendMessage=async(message)=>{
const localHistoryData =  await localStorage.getItem('history');
const localHistory = await JSON.parse(localHistoryData);
console.log(localHistory);


try {
    
    const data = await axios.post("http://localhost:3030/message",{
        message: message,
        history: localHistory,
    });
    const history = data.data;
    console.log(history);
     localStorage.clear();
     localStorage.setItem('history',JSON.stringify(history.history));
    const x =localStorage.getItem('history');
    const y = JSON.parse(x);
    console.log(y);
    return history;
} catch (error) {
    console.log(error);
}


    
};

