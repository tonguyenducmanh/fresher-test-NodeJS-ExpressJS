export const HandleImage = () =>{
    const anhValue = document.getElementById('anhEditValue')
    const avatarValue = document.getElementById('avatarEditValue')
    const reader = new FileReader();
    const readerEvent = ()=>{
      avatarValue.style.backgroundImage = `url(${ reader.result })`;
      avatarValue.style.backgroundPosition = 0;
      avatarValue.style.backgroundSize= 'cover';
    }
    const anhValueEvent = function() {
      const image = this.files[0];
      if(image) reader.readAsDataURL(image);
      }
    reader.addEventListener("load",readerEvent , false);
    anhValue.addEventListener('change',anhValueEvent, false)

    return()=>{
      reader.removeEventListener("load",readerEvent , false);
    anhValue.removeEventListener('change',anhValueEvent, false)
    }
}
