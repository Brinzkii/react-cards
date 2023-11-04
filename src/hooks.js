import {useState} from 'react'
import axios from "axios";
import {v1 as uuid} from "uuid";

function useFlip() {
    const [value, setValue] = useState(true)
    const flip = () => {
        setValue(value => !value)
    }

    return [value, flip]
}

function useAxios(url) {
    const [data, setData] = useState([])
    const addData = async (more=null) => {
        if (typeof more === 'object') {
            const response = await axios.get(url);
            setData(data => [...data, { ...response.data, id: uuid() }]);
        } else {
            const response = await axios.get(url + more);
            setData(data => [...data, { ...response.data, id: uuid() }]);
        }
        
      };

    return [data, addData]
}

export {
    useFlip,
    useAxios
}

