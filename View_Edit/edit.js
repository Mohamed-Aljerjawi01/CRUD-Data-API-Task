// *********************************** Edit User ***********************************

async function getEdit(){

    const params = new URLSearchParams(window.location.search);
    // console.log(params);

    const userId = params.get('id');
    // console.log(userId);

    const {data} = await axios.get(`https://node-react-10.onrender.com/users/${userId}`);
    // console.log(data);  

    let html =`
        <input type="text" name="userName" value="${data.user.userName}" placeholder="User Name ..." >
        <input type="email" name="email" value="${data.user.email}" placeholder="User Email ..." >
        <input type="text" name="phone" value="${data.user.phone}" placeholder="User Phone ..." >
        <button type="submit">Update</button>
    `;

    document.querySelector('.create-form').innerHTML = html;
    // console.log(html);
    
}
getEdit();

// *********************************** Update User ***********************************

const updateUserForm = document.querySelector(".create-form");
updateUserForm.onsubmit = async function(e){
    const params = new URLSearchParams(window.location.search);
    // console.log(params);

    const userId = params.get('id');
    // console.log(userId);

    e.preventDefault();

    const user= {
        userName: e.target.userName.value,
        email: e.target.email.value,
        phone: e.target.phone.value
    }

    try{
        const response = await axios.put(`https://node-react-10.onrender.com/users/${userId}`, user);
          
        // alert()
        Swal.fire({
        title: "Updated Successfully",
        confirmButtonText: "OK",
        }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "../View_Users/index.html";
        }
        });

    }catch(err){
        document.querySelector('.text-danger').textContent = err.message;

        // alert()
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error is ${err}`,
        footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}