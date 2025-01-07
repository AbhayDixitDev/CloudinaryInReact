import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8000/mycloudenary/datadisplay";
        axios.get(api).then((res)=>{
             setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, []);

    const ans= mydata.map((key)=>{
        return(
            <>
              <tr>
                <td>
                    <img src={key.images} width="100" height="100" />
                    </td>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display Data</h1>
          <table>
            <tr>
                <th> </th>
                <th> Rollno</th>
                <th> Name</th>
                <th> City</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;