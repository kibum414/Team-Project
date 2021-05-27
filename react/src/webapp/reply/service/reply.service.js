import axios from 'axios'

const register=(input)=>{

    let formData = new FormData();
//     var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
    formData.append("text",input.text);
    formData.append("replyer",input.replyer);
    formData.append("reviewId",input.reviewId)
   return axios.post('http://localhost:8080/replies/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })

}

const list=(reviewId)=>{
    return axios.get(`http://localhost:8080/replies/list/${reviewId}`)
}

const read=(rno)=>{
    return axios.get(`http://localhost:8080/replies/read/${rno}`)
}

const modify=(reply)=>{

    return axios.put("http://localhost:8080/replies/modify/"+reply.rno, reply)
}

const deletes=(rno)=>{
    console.log("Delete reply")
    return axios.delete(`http://localhost:8080/replies/remove/${rno}`, {data:{...rno}})
}

export default{register, list, read, modify, deletes}