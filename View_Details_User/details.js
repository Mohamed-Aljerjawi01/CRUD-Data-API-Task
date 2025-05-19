// هذه طريقة استدعاء مكتية axios
// بالطريقة الثانية وهي كرابط CDN
// يوضع هذا الرابط بداخل body
// وقبل ملف استدعاء الجافاسكربت
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// رابط ملف API المستخدم
// https://node-react-10.onrender.com/users

async function getDetails(){
    try{
        // const test1 = window
        // console.log(test1);

        // const test2 = window.location
        // console.log(test2);

        // const test3 = window.location.search
        // console.log(test3);

        // const test4 = window.location.search.split('=')[1]
        // console.log(test4);


        const params = new URLSearchParams(window.location.search);
        // console.log(params);
        const userId = params.get('id');
        console.log(userId);
        
        const {data} = await axios.get(`https://node-react-10.onrender.com/users/${userId}`);
        console.log(data);

        let html = `
                <tr>
                    <td>${data.user._id}</td>
                    <td>${data.user.userName}</td>
                    <td>${data.user.email}</td>
                    <td>${data.user.phone}</td>
                </tr>
        `;  

        document.querySelector('.user-details').innerHTML = html;
    }catch(err){
        document.querySelector('.text-danger').textContent = err.message;
    }finally{
        // Explain loading
        document.querySelector('.loader-container').classList.add('d-none');
    }
}
getDetails();