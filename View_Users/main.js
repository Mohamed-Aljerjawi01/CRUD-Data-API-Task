// هذه طريقة استدعاء مكتية axios
// بالطريقة الثانية وهي كرابط CDN
// يوضع هذا الرابط بداخل body
// وقبل ملف استدعاء الجافاسكربت
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// رابط ملف API المستخدم
// https://node-react-10.onrender.com/users

// *********************************** Get Users ***********************************

async function getUsers(){

    // أي تعامل مع مفهوم  API
    // يجب كتابة دوال try{} , catch{} , finally{}
    // دالة try{}
    // سيتم تنفيذها في حالة لم يكن هناك أخطاء أو مشاكل تعيق تنفبذ الكود
    // بينما دالة catch{}
    // سيتم تنفيذها في حالة كان هناك أخطاء أو مشاكل تعيق تنفبذ الكود
    // ودالة finally{}
    // سيتم تنفيذها في جيمع الحالات سواء تم تنفيذ دالة try{}
    // أو دالة catch{}

    try{

        const {data} = await axios.get('https://node-react-10.onrender.com/users');

        // console.log(data);
        
        let html='';
        for(let i=0; i<data.users.length; i++){
            html += `
                <tr>
                    <td>${data.users[i]._id}</td>
                    <td>${data.users[i].userName}</td>
                    <td>${data.users[i].email}</td>
                    <td>${data.users[i].phone}</td>

                    <td class="d-flex gap-15 flex-justify-content">
                        <a class="btn-primary btn" href="../View_Details_User/details.html?id=${data.users[i]._id}">Details User</a>
                        <button onclick = "deleteUser('${data.users[i]._id}')" class="btn-danger btn">Delete</button>
                        <a class="btn-secandry btn" href="../View_Edit/edit.html?id=${data.users[i]._id}">Edit User</a>
                    </td>
                </tr>
            `
        };
        // console.log(html);

        document.querySelector('.users-data').innerHTML = html;

        // Explain loader:
        // في حال كان الانترنت بطيء فان الموقع سيتأخر في جلب البيانات من API
        // فلذلك من الأفضل اضافة loading
        // للصفحة ولرؤية النتيجة أي لرؤية عملية loading 
        // فاننا سنقوم بتبطيء الانترنت لدينا من خلال الذهاب الى شاشة Network
        // في ال DevTools
        // ونضغظ على الزر الذي يشبه شبكة الانترنت ونختار
        // 3G
        // موقعين للحصول على loader css
        // https://cssloaders.github.io/
        // https://css-loaders.com/dots/
        document.querySelector(".loader-container").classList.add('d-none');
        
    }catch(err){ // err => error
        // alert("Erroooooooooooooooooor");
        // document.querySelector("div.text-danger").textContent = "Error";
        // document.querySelector("div.text-danger").textContent = err.message;

        const error = err.message;
        document.querySelector("div.text-danger").textContent = `Error is ${error}`;

        // Explain loader:
        document.querySelector(".loader-container").classList.add('d-none');

    }finally{
        // هذا الكود مكرر في الحالتين 
        // سواء تم تنفبذ دالة try{}
        // أو دالة catch{}
        // فالأفضل وضعه في دالة finally{}
        // وحذفه من الدالتين try{} , catch{}
        document.querySelector(".loader-container").classList.add('d-none');
    }

}
getUsers();

// *********************************** Delete User ***********************************

async function deleteUser(id){

    try{

        // هذه الطريقة لفحص ال deleteUser function
        // شغالة صح ولا فيها مشكلة
        // alert(id)

        // ***********************************

        // ولحذف المستخدم وبياناته من ال API
        // const response = await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
        // وللتأكد من عملية ارسال البيانات بطريقة صحيحة 
        // نقوم بالذهاب الى شاشة ال Network
        // في ال DevTools
        // وسنجد أن هناك طلب جديد تم حذفه
        // وفي حالة النجاح سنجد أن حالة الطلب هي 201
        // وفي حالة الفشل سنجد أن حالة الطلب هي 400 أو 500

        // ***********************************

        // وفي حال بدي أستخدم طريقة fetch()
        // const response = await fetch(`https://node-react-10.onrender.com/users/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // ***********************************

        // ولتحديث الصفحة بعد الحذف لكي ترى النتيجة
        // window.location.reload();

        // ***********************************

        // هذه الطريقة لعرض رسالة تأكيد الحذف
        // alert("Are you sure you want to delete this user?");
        // const confirmDelete = confirm('Are you sure you want to delete this user?');

        // هناك أشكال عدة لعرض شاشة ال alert()
        // منها عرضها بواسطة مكتبة SweetAlert
        // وهذا هو رابط موقع المكتبة
        // https://sweetalert2.github.io/#position
        // يمكن استدعاء المكتبة اما بتنزيلها أو من خلال رابط CDN
        // يوضع هذا الرابط بداخل body
        // وقبل ملف استدعاء الجافاسكربت
        // وهذا هو رابط CDN الخاص بها
        // <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        // الشكل الأول
        // Swal.fire({
        // title: "Deleted Successfully",
        // icon: "success",
        // draggable: true
        // });

        // الشكل الثاني
        // Swal.fire({
        // position: "center-center",
        // icon: "success",
        // title: "Deleted Successfully",
        // showConfirmButton: false,
        // timer: 1500
        // });

        // الشكل الثالث
        Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
        }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

            try{
                // سيتم تنفيذ رابط الحذف هذا بعد الدخول على جملة if
                // ملاحظة / لا يجب أن يكون هناك أكقر من رابط واحد
                // API
                // لتنفيذ نفس الأمر
                const response = await axios.delete(`https://node-react-10.onrender.com/users/${id}`);

                // alert()
                Swal.fire({
                title: "Deleted Successfully",
                confirmButtonText: "OK",
                }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    // ولتحديث الصفحة بعد الحذف لكي ترى النتيجة
                    window.location.reload();
                }
                });
                
            }catch(err){
                const error = err.message;

                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error is ${error}`,
                footer: '<a href="#">Why do I have this issue?</a>'
                });
            }

        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
        });
        
        // ***********************************

    }catch(err){
        const error = err.message;

        // الشكل الرابع
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error is ${error}`,
        footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

}