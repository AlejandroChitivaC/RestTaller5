var foto = document.getElementById("foto-file");
var api_url=`./api/users/add`;
var cloud_url = "https://api.cloudinary.com/v1_1/dilwbkj5s/upload";
var cloud_upload = "cl2yqfni";
let pic = "";

foto.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloud_upload);

  axios({
    url: cloud_url,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: formData,
  })
      axios({
        url: api_url,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })


      .then(function (response) {
        console.log(response);
        console.log(response.data.secure_url);
        return pic = response.data.secure_url;
      })
      .catch(function (error) {
        console.log(error);
      });
});

var getData = function () {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rpassword = document.getElementById("rpass").value;
  var rol = document.getElementById("rol").value;
  var fcoins = document.getElementById("Fcoins").value;

  let btn = document.getElementById("register");

  console.log(name, username, email, password, rpassword, rol, fcoins, pic)

  alert(
      "Hola, " + name, + " tu username es:" + username, + "tu saldo de Fcoins es " + fcoins
  );

  console.log(pic);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
      name: name.value,
      username: username.value,
      email: email.value,
      foto: foto.value,
      password: password.value,
      rpassword: rpassword.value,
      rol: rol.value,
      fcoins: fcoins.value,
    };
    window.location.href = "../web/login.html";
    JSON.stringify(obj);
  });
};
