export const HandleImage = () =>{
    const anhValue = document.getElementById('anhEditValue')
    const avatarValue = document.getElementById('avatarEditValue')
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        avatarValue.style.backgroundImage = `url(${ reader.result })`;
        avatarValue.style.backgroundPosition = 0;
        avatarValue.style.backgroundSize= 'cover';
      }, false);
    anhValue.addEventListener('change',function() {
    const image = this.files[0];
    if(image) reader.readAsDataURL(image);
    }, false)
}
