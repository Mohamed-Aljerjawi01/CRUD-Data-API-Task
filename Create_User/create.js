// رابط ملف API المستخدم
// https://node-react-10.onrender.com/users

const addUserForm = document.querySelector(".create-form");

addUserForm.onsubmit = async function(e){ // e => even
    // console.log("test");
    // في هذه الحالة سيقوم بتنفيذ اأمر السابق ولكن سرعان ما سيذهب وذلك لأن السلوك الافتراصي لعنصر ال form
    // يتمثل في عمل تحديث أو refrech
    // للصفحة بعد الضغظ على زز الارسال

    // ***********************************

    // ولحل المشكلة يتوجب علينا ازالة هذا السلوك الافتراضي وذلك من خلال الكود التالي
    e.preventDefault();

    // ***********************************

    // ولطباعة الناتج عن تنفيذ ال event
    // onsubmit
    // console.log(e);
    // سيظهر لنا معلومات عن حالة البيانات المرسلة والتي سيكون من ضمنها تلك البيانات المرسلة عبر ال form
    // وستكون على شكل object
    // وباسم SubmitEvent 

    // ***********************************

    // ولطباعة تلك البيانات المرسلة عبر ال form
    // console.log(e.target);
    // سيظهر لنا عنصر ال form
    // كعنصر html
    // وبه جميع المعلومات الخاصة به

    // ***********************************

    // ولطباعة عنصر معين من داخل ال form
    // سنقوم بكتابة قيمة الخاصية name
    // للعنصر الذي نريد طباعته
    // console.log(e.target.userName);
    // سيظهر لنا عنصر ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة userName
    // وبه جميع المعلومات الخاصة به
    // console.log(e.target.password);
    // سيظهر لنا عنصر ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة password
    // وبه جميع المعلومات الخاصة به

    // ***********************************

    // console.log(e.target.userName.value);
    // سيظهر لنا قيمة ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة userName
    // console.log(e.target.password.value);
    // سيظهر لنا قيمة ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة password
    // console.log(e.target.email.value);
    // سيظهر لنا قيمة ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة email
    // console.log(e.target.phone.value);
    // سيظهر لنا قيمة ال input
    // الذي يحمل قيمةالخاصية name
    // وهي القيمة phone

    // ***********************************

    // لاضافة مستخدم جديد ببيانات جديدة يجب أن تكون تلك البيانات على شكل object
    // ويجب أن يكون اسم ال key 
    // هو نفسه اسم ال key
    // في ال object
    // الذي سنقوم بارساله الى ال API
    // وذلك من خلال استخدام الكود التالي
    const user= {
        userName: e.target.userName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value
    }
    // console.log(user);

    // ***********************************

    try{

        // ولارسال البيانات الى ال API
        const response = await axios.post("https://node-react-10.onrender.com/users", user);

        // alert()
        Swal.fire({
        title: "Created Successfully",
        confirmButtonText: "OK",
        }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "../View_Users/index.html";
        }
        });

        // وللتأكد من عملية ارسال البيانات بطريقة صحيحة 
        // نقوم بالذهاب الى شاشة ال Network
        // في ال DevTools
        // وسنجد أن هناك طلب جديد تم ارساله
        // وفي حالة النجاح سنجد أن حالة الطلب هي 201
        // وفي حالة الفشل سنجد أن حالة الطلب هي 400 أو 500

        // ***********************************

        // وفي حال بدي أستخدم طريقة fetch()
        // const response = await fetch("https://node-react-10.onrender.com/users", user , {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // ***********************************

        // للتحويل الى صفحة عرض المستخدمين بعد اضافة مستخدم جديد
        // window.location.href = "../View_Users/index.html";

        // ***********************************

        // ابحث على طرق قراءة البيانات المرسلة من ال form
        // وارسلها الى ال API

        // ***********************************

    }catch(error){
        document.querySelector(".text-danger").textContent = `Error is ${error.message}`;
        
        // alert()
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error is ${error}`,
        footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}